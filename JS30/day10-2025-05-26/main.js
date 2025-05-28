const divImg=document.querySelector("img");
const divPre=document.querySelector("#pre");
const divNext=document.querySelector("#next");


let listImg=["/JS30/day9-2025-05-25/img/pexels-davidpickup-12605822.jpg","/JS30/day9-2025-05-25/img/real_yddj.jpg","/JS30/day9-2025-05-25/img/12-FCB-MU-31-UCL-1011.png"];
let stt=0;

function display(){
    divImg.src=`${listImg[stt]}`
}
divPre.addEventListener("click",()=>{
    if( stt>0){
        stt--;
        display();
    }
})
divNext.addEventListener("click",()=>{
    if( stt<2){
        stt++;
        display();
    }
})



