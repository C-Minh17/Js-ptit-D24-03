const divAdd=document.querySelector("#add");
const divSave=document.querySelector("#save");
const divId=document.querySelector("#id");
const divName=document.querySelector("#name");
const divPrice=document.querySelector("#price");
const divSl=document.querySelector("#sl");



let index=-1;
class product{
    constructor(id,name,price,quantity){
        this.id=id;
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    };
};

let list=[];

function add(id,name,price,quantity){
    list.forEach(item=>{
        if (item.name==name){
            alert("sản phẩm đã có ")
            return
        }
    })
    list.push(new product(id,name,price,quantity))
};
function remove(index){
    list.splice(index,1);
};
function sum(){
    let sum=0;
    list.forEach(item => {
        sum+= (item.price*item.quantity)
    });
    return sum
};
function priceMax(){
    let nameMax="";
    let max=-1;
    list.forEach(item=>{
        if (item.price>max){
            max=item.price;
            nameMax=item.name;
        }
    });
    return nameMax
};
function thongKe(){
    document.querySelector("#tk").innerHTML=`
        <br>
        <div>Tổng giá trị tồn kho:${sum()}</div>
        <div>Sản phẩm đắt nhất:${priceMax()}</div>
    `
};
function display(){
    let html="";
    list.forEach(item=>{
        html+=`
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
                <td>${item.price*item.quantity}</td>
                <td class="bt">
                    <span class="fix">sửa</span>
                    <span class="delete">Xóa</span>
                </td>
            </tr>
        `;
    });
    document.querySelector("#display").innerHTML=html;

    document.querySelectorAll(".delete").forEach((item,i)=>{
        item.addEventListener("click",()=>{
            remove(i);
            display();
            thongKe();
            document.querySelector("#button").classList.remove("btn");
            divId.value="";
            divName.value="";
            divPrice.value="";
            divSl.value="";
        });
    });
    document.querySelectorAll(".fix").forEach((item,i)=>{
        item.addEventListener("click",()=>{  
            index=i;
            divId.value=list[i].id;
            divName.value=list[i].name;
            divPrice.value=list[i].price;
            divSl.value=list[i].quantity;
            document.querySelector("#button").classList.add("btn")
        });
    })
};

divAdd.addEventListener("click",()=>{
    index++;
    add(divId.value,divName.value,divPrice.value,divSl.value);
    display();
    thongKe();
    divId.value="";
    divName.value="";
    divPrice.value="";
    divSl.value="";
});
document.querySelector("#save").addEventListener("click",()=>{
    list[index].id=divId.value;
    list[index].name=divName.value;
    list[index].price=divPrice.value;
    list[index].quantity=divSl.value;
    display();
    thongKe();
    divId.value="";
    divName.value="";
    divPrice.value="";
    divSl.value="";
})





