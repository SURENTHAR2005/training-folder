let basketball=2095;
let tshirt=799;
let toaster=1899;
let total=basketball+tshirt+toaster;

console.log("Total charge of product : "+total/100);

let s_charge=(total+499);
let totcharwithship=s_charge/100;
console.log("Total charge with shipping charge before tax : "+totcharwithship);

e_tax= (totcharwithship)*(10/100);
console.log(" order total : "+(e_tax + totcharwithship).toFixed(2));

rounddown=Math.floor(2.8);
console.log(rounddown);
roundup=Math.round(2.8);
console.log(roundup);

