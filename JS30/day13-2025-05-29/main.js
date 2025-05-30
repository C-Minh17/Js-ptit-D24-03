const table=document.querySelector("table");
const add=document.querySelector("#ad");
const msv=document.querySelector("#msv")
const ten=document.querySelector("#name")
const email=document.querySelector("#email")
const phone=document.querySelector("#phone")
const fix=document.querySelectorAll(".fix")
const save=document.querySelector("#save")


let dataName=[];
let dataMSV=[];
let dataEmail=[];
let dataPhone=[];


let index=0;
function display(stt){
    const tr=document.createElement("tr");
    tr.innerHTML=`
        <td>${dataMSV[stt]}</td>
        <td>${dataName[stt]}</td>
        <td>${dataEmail[stt]}</td>
        <td>${dataPhone[stt]}</td>
        <td class="fix" ><span class="bt">Sửa</span></td>
    `;
    table.appendChild(tr);
    tr.querySelector(".fix").addEventListener("click",()=>{
        msv.value=dataMSV[stt];
        ten.value=dataName[stt];
        email.value=dataEmail[stt];
        phone.value=dataPhone[stt];
        document.querySelector(".button").classList.add("change")
        index=stt;
    });
}

function ktra(){
    if (msv.value && ten.value && email.value && phone.value){
        return true
    }else{
        return false
    }
}

add.addEventListener("click",()=>{
    if (ktra()){
        dataName.push(ten.value);
        dataMSV.push(msv.value);
        dataEmail.push(email.value);
        dataPhone.push(phone.value);
        display(dataName.length - 1);
        msv.value="";
        ten.value="";
        email.value="";
        phone.value="";
    }
});

save.addEventListener("click",()=>{
    const remove=document.querySelectorAll("table tr");
    remove.forEach((item,idx)=>{
        if (idx!==0){
            item.remove()
        }
    });

    dataMSV[index]=msv.value;
    dataName[index]=ten.value;
    dataEmail[index]=email.value;
    dataPhone[index]=phone.value;

    for (let a=0;a<dataMSV.length ;a++){
        display(a);
    };

    document.querySelector(".button").classList.remove("change");
    index=0;

    msv.value="";
    ten.value="";
    email.value="";
    phone.value="";
})




