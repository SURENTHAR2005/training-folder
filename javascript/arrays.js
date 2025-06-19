fruits=["apple","banana","cheery"];
fruits.push("dragon fruit");
console.log("after the push");
console.log(fruits);
fruits.pop();
console.log("after the pop");
console.log(fruits);

console.log(fruits[0]);
console.log("$$$$$$$$$$$$$$$$$$$$$$4444");
console.log(fruits);
//.shift() remove -0 index value
//.unshift() nothing hapens
/*fruits.splice(1,1);//remove from
console.log(fruits);
*/
let len1=fruits.length;
console.log(len1);
for(let i=0;i<fruits.lenght;i++){
    console.log(fruits);
}

// fruits.shift();//remove the 0 index element
// console.log(fruits);
// fruits.unshift();
// console.log(fruits)

let removed = fruits.slice(0,1);
console.log(removed);
console.log(fruits);
let t=delete fruits[0];
console.log(fruits);
console.log(t);

//spread operator
let newArray=[...fruits,"orange","mango"]
console.log(newArray);