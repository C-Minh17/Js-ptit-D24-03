const table=document.querySelector("table");
const button=document.querySelector("#button");



function add(){
    const tr=document.createElement("tr");
    tr.innerHTML=`
        <td>${document.querySelector("#msv").value}</td>
        <td>${document.querySelector("#name").value}</td>
        <td>${document.querySelector("#email").value}</td>
        <td>${document.querySelector("#phone").value}</td>
    `;
    table.appendChild(tr);
}
function ktra(){
    if (document.querySelector("#msv").value && document.querySelector("#name").value && document.querySelector("#email").value && document.querySelector("#phone").value){
        return true
    }else{
        return false
    }
}
button.addEventListener("click",()=>{
    if (ktra()){
        add();
        document.querySelector("#msv").value="";
        document.querySelector("#name").value="";
        document.querySelector("#email").value="";
        document.querySelector("#phone").value="";
    }
})


