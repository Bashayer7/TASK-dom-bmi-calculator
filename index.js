
function calculateBMI() {

  // Don't edit the code
  
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
   height=height/100;
   
  const calculateBMI = (weight/(height*height))
  alert(`your bmi is${calculateBMI}`);
if(age<=24&&calculateBMI<18.5){
console.log("you are underweight")}
else if (age<=34&&calculateBMI<=24.9){
console.log("you are healthyweight");
}
else if(age<=44&&calculateBMI<=29.9){
console.log("you are overweight");}
else if(calculateBMI==30){
console.log("above obesity");}
else{
console.log("your bmi is wrong,re-enter your info");
}
//second solution
//if(age>=19 && age<24 ){
 // alert("you are underweight")
//}
//else if(age<=23){
 // alert("you are healthy")
//}
//else{
//alert("you are overweight ")

//}
if(age>=24 && age<44 ){
  if(calculateBMI<20){
  alert("you are underweight")
  }
}
else if(calculateBMI<25){
  alert("you are healthy")
}
else{
alert("you are overweight ")

}

}



