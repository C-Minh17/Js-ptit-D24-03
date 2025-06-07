if (localStorage.getItem("status")==1){
    location.href="admin.html";
};

document.querySelector("#up").addEventListener("click",()=>{
    document.querySelector("#signUp").style.display="block";
    document.querySelector("#signIn").style.display="none";
})
document.querySelector("#in2").addEventListener("click",()=>{
    document.querySelector("#signUp").style.display="none";
    document.querySelector("#signIn").style.display="block";
})

const inUser=document.querySelector("#inUser");
const inPass=document.querySelector("#inPass");
const upUser=document.querySelector("#upUser");
const upPass=document.querySelector("#upPass");

let list=[];
list=JSON.parse(localStorage.getItem("users"))
class signUp{
    constructor(name,pass){
        this.name=name;
        this.pass=pass;
    }
};

function ktra(userName,pass){
    for (let item of list){
        if (item.name==userName && item.pass==pass){
            return true
        }
    }
    return false
};
function removeInfo(){
    upUser.value="";
    upPass.value="";
    inUser.value="";
    inPass.value="";
}
document.querySelector("#up2").addEventListener("click",()=>{
    if (upUser.value!="" && upPass.value!=""){
        list.push(new signUp(upUser.value,upPass.value));
        localStorage.setItem("users",JSON.stringify(list));
        removeInfo();
    }else{
        document.querySelector("#error2").innerHTML="Vui lòng nhập thông tin";
    }
    
})

document.querySelector("#in").addEventListener("click",()=>{
    if (inUser.value!="" && inPass.value!=""){
        if(ktra(inUser.value,inPass.value)==true){
            localStorage.status=1;
            location.href="admin.html";
            removeInfo()
        }else{
            document.querySelector("#error").innerHTML="Thông tin tài khoản hoặc mật khẩu không chính xác";
        };
    }else{
        document.querySelector("#error").innerHTML="Vui lòng nhập tài khoản hoặc mật khẩu";
    }
})







