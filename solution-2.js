//get function values ,set to object,return as object
function details(a,b,c,d){
    let person={
        name:a,
        age:b,
        salary:c,
        status:d
    }
    return person;
}
let n=details("surenthar v b",20,100000,"well settled");
console.log(n);