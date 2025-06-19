console.log("3">2);
console.log("3"<2);
console.log("2">=2);
console.log("4"<=3);

console.log("4"==4); //prints true it the 1st value be string 
console.log("4"===4); //prints true it does not change the 1st value to string

console.log("2" !==2);//correct way
/*console.log("2" != 2);//wrong way*/
console.log("this is logical operator");
console.log(2>3 && 3>2);//logcal and
console.log(2==2 || 3==4);//logical or


console.log("if else");
let mar=50;
if(mar>90){
    console.log("given num is greater");
}else{
    console.log("the given num isless");
}
console.log("for loop");
for(let i=0;i<5;i++){
    console.log(i);
}
console.log("while loop");
j=0;
while(j<9){
    console.log(j);
    j++;
}
console.log("break")
// console.log("")
let r=0;
while(r<9){
    if(r==7){
        break;
    }
    else{
        console.log(r);
    }
    r++;
}