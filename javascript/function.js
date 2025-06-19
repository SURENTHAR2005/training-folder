function print(){
    console.log("hi guys");

}
print();

function add(a,b){
    console.log(a+b);
}
add(3,4)

//higher order function
function displayAnotherfunction(func){
    func(1,2);
}
displayAnotherfunction(add);//access other function in other function

let varFunc1=add;
varFunc1(7,8);

let ano_func=function(a,b){//parameter
    console.log(b-a);
};
ano_func(55,56)//argument


const arrowfuncVar=()=>{
    console.log("arrow function");
};
arrowfuncVar()