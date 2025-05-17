// var a = parseInt(prompt('Nhập số nguyên a: '));

// if(a==2){
//     document.write('Hôm nay là thứ hai');
// }else if(a==3){
//     document.write('Hôm nay là thứ ba');
// }else if(a==4){
//     document.write('Hôm nay là thứ tư');
// }else if(a==5){
//     document.write('Hôm nay là thứ năm');
// }else if(a==6){
//     document.write('Hôm nay là thứ sáu');
// }else if(a==7){
//     document.write('Hôm nay là thứ bảy');
// }else if(a==8){
//     document.write('Hôm nay là chủ nhật');
// }else{
//     document.write('Không hợp lệ');
// }

// var a = 2;

// switch (a) {
//     case 0:
//         document.write('không');
//         break;
//     case 1:
//         document.write('Một');
//         break;
//     case 2:
//         document.write('Hai');
//         break;
//     case 3:
//         document.write('Ba');
//         break;
//     case 4:
//         document.write('Bốn');
//         break;
//     case 5:
//         document.write('Năm');
//         break;
//     default:
//         document.write('Không thỏa mãn');
//         break;
// }
let a=0;
for (a;a<10;a++){
    document.write("Barca vo dinh laliga hom qua----")
}
let b=0;
while (b<10){
    document.write("real thua barca ca 4 tran elclassico--------- ");
    b++;
}
let c=0;
do{
    document.write("barca > real--------- ");
    c++;
}while (c<10);

let sum=0;
a=0
for (a;a<=100;a++){
    sum+=a;
}
document.write("for:",sum)
b=0;
sum=0;
while (b<=100){
    sum+=b;
    b++;
}
document.write("while: ",sum);
c=0;
sum=0;
do{
    sum+=c;
    c++;
}while (c<=100);
document.write("do-white:",sum);


function real(){
    document.write("<br>" + "hala varid")
}
real()