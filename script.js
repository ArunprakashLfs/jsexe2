const isisland=false;
//To asign the boolean data types 
const country="india";
const continent="asia";
//To Check the string
let population=150 ;
//number data types
const language="tamil";
//undefined data types


//To check output we use console.log in commebts
/*console.log(isisland);
console.log(country);
console.log(population);
console.log(language);*/

//to check what the type we use typeof
/*console.log(typeof isisland);
console.log(typeof country);
console.log(typeof population);
console.log(typeof language);*/

//to check population in half
/*console.log(population/2);
population++;
console.log(population);
console.log(population>6);
console.log(population<33);
const description=country +''+ "is in" +  "" + continent + "and its" + "" + "" + population+ "million speaks "+ language;
console.log(description);*/
//the excersise one
//problem solving
//1.understand problem
//inputs how you are getting
//output form
//2.Divide the sollution
/*const markweight=82;
const markheight=1.74;

const johnweight=96;
const johnheight=1.92;
/*BMI = mass / height ** 2 = mass / (height * height) (mass in kg
    and height in meter)*/
/*Smarkbmi=markweight/markheight**2;
johnbmi=johnweight/ (johnheight * johnheight);
console.log('MARK BMI' + '' +markbmi);
console.log('JOHN BMI' + '' + johnbmi);
console.log(markhigherbmi=(markbmi>johnbmi));*/

//template literals using=`$()`
/*const descriptionone=`${country} is in ${continent}, and its
${population} million people speak ${language}`;
console.log(descriptionone);

//if condition
if(population>33){
    console.log( `${country} population is above average`);
}
else{
    console.log(`${country}population is below average`)
}*/
//if else for bmi
//.tofixed(1) for one decimal
/*if(markbmi>johnbmi){
    console.log(`Marks Bmi(${markbmi.toFixed(2)}) higher than johns( ${johnbmi.toFixed(2)} )`);
}
else if (johnbmi>markbmi){
    console.log(`JOHNs Bmi(${johnbmi.toFixed(2)}) higher then Markbmi(${markbmi.toFixed(2)})`);
}
else{
    console.log("BOth equal bmi")
}*/
//type conversion and Coercion

console.log('9'-'5');
// This is based on operator apply and performs 
// it is string value based on operator(-) it converts into numbers and performs
console.log('19' - '13' + '17');
// in first performs based on operator(-)it apply numer approch
//in addition it performs string approch
console.log('19' - '13' + 17);
// in first performs based on operator(-)it apply nume
//in add two number performs addtion
console.log('123' < 57);

//based on operator(<) it applies number approch
console.log(5 + 6 + '4' + 9 - 4 - 2);
// act number of add and string concordination after subtraction applied


//TOPIC:-  Equality Operators
const numNeighbours = prompt('How many neighbour countries does your country have?',);
    // LATER : This helps us prevent bugs
const numNeighbours  = Number( prompt('How many neighbour countries does your country have'),);
if (numNeighbours===1){

}
else if (numNeighbours>1){
    console.log("More than one border");
}
else{
    console.log("No Borders")
}
