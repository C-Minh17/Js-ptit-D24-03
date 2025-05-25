const divBody=document.querySelector("body");
const divButton=document.querySelector(".button");
const divSelect=document.querySelector("select");

divButton.addEventListener("click",()=>{
    if (divSelect.value=="barca"){
        divBody.style.backgroundImage="url(/JS30/day9-2025-05-25/img/pexels-davidpickup-12605822.jpg)"
    }else if(divSelect.value=="real"){
        divBody.style.backgroundImage="url(/JS30/day9-2025-05-25/img/real_yddj.jpg)"
    }else{
        divBody.style.backgroundImage="url(/JS30/day9-2025-05-25/img/12-FCB-MU-31-UCL-1011.png)"
    }
})