const divDisplay=document.querySelector("#display");
const divButton=document.querySelectorAll("li");

let kq="";
divButton.forEach(item=>{
    item.addEventListener("click",()=>{
        if (item.dataset.value=="C"){
            kq="";
            divDisplay.innerHTML=kq;
        }else if(item.dataset.value=="="){
            if (kq!=""){
                try {
                    kq=eval(kq);
                    divDisplay.innerHTML=kq;
                }catch {
                    kq="";
                    divDisplay.innerHTML="error";
                }
            }else{
                divDisplay.innerHTML="";
            }
        }else{
            kq+=item.dataset.value;
            divDisplay.innerHTML=kq;
        }
    })
})










