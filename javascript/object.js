let newobject = {
    name: "Surenthar v b",
    age: 25
}
console.log(newobject.name);
console.log(newobject.age);

function add(a, b) {
    return a + b;
}

//specifying the function as object
let newobject1 = {
    name: "joshep",
    age: 20,
    cfunc: add
}
console.log(newobject1.name);
console.log(newobject1.age);
console.log(newobject1.cfunc(1, 2));

//filtering the values by arrow function
let num=[1,2,3,4,5,6]
let evens=num.filter(
    (n)=>{
        return n%2===0;
    }
);
console.log(evens);

//filtering the values by anonymous function
let num3=[1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18]
let odds=num3.filter(
    function(n){
        return n%2!==0;
    }
);
console.log(odds);

//map function
let num2=[1,2,3,4,5,6]
let g=num2.map((n)=>{
    return n*n;
});
console.log(g);

//reduce method
let newSum=num.reduce((sum,n)=>{
    return sum+n;
},(sum=0));//required parameter
console.log(newSum)


//de-structuring 
function details(){
    let person={
        name:"surenthar v b",
        age:30
    };
    return person;
}
//details();
let returnV=details();
console.log(returnV);

// let name2=returnV.name;
// let age2 =returnV.age;

let {newname1,newage1}=details();      //de-structuring 
console.log(newname1);


//accessing function includes spread operator
function officedetails(){
    let person_de={
        name:"joseph",
        age:23
    }
    let full_person_de={
        ...person_de,
        company:"abc",
        isMarried:false
    }
    return full_person_de;
}
let {n,age1,company}=officedetails();
console.log(company);

