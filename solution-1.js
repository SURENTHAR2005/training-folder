//typing
console.log("i want to become a developer");

//datatypes
let a=3;
console.log("3"+a);
console.log("4"-a);

//loop and operator
let b=100;
while(b>0){
    if(b==90){
        break;
    }
    else{
        if(b==95){
            b--;
            continue;
        }
        console.log(b);
        b--;
        
    }
}

//array
numbers=["one","two","three","four","five","six","seven"];
numbers.push("eight");
console.log(numbers);
numbers.pop();
console.log(numbers);
let num1=numbers.length;

//loop
for (let j=0;j<num1;j++){
    console.log(numbers[j]);
}

//operator
if(num1){
    console.log("this is not empty list");
}else{
    console.log("this is empty list");
}