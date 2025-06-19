let newobject = {
    name: "Surenthar v b",
    age: 25
}
console.log(newobject.name);
console.log(newobject.age);

function add(a, b) {
    return a + b;
}


let newobject1 = {
    name: "joshep",
    age: 20,
    cfunc: add
}
console.log(newobject1.name);
console.log(newobject1.age);
console.log(newobject1.cfunc(1, 2));


let num=[1,2,3,4,5,6]
let evens=num.filter(
    (n)=>{
        return n%2===0;
    }
);
console.log(evens);

let num3=[1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18]
let odds=num3.filter(
    function(n){
        return n%2!==0;
    }
);
console.log(odds);