const divLi=document.querySelectorAll("li");
const divContent=document.querySelector("#content");



let html="";
let ketQua="";
divLi.forEach(item=>{
    item.addEventListener("click",()=>{
        if (item.dataset.value=="C"){
            html="";
            divContent.innerHTML=html;           
        }else if(item.dataset.value=="="){
            try {
                ketQua=eval(html);
                html = ketQua.toString();
                divContent.innerHTML=html;                  
            } catch {
                divContent.innerHTML="lỗi";                  
                html="";
            }
       
        }else{
            html+=item.dataset.value;
            divContent.innerHTML=html;      
        }
    })
});













