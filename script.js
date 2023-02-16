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
const markweight=82;
const markheight=1.74;

const johnweight=96;
const johnheight=1.92;
/*BMI = mass / height ** 2 = mass / (height * height) (mass in kg
    and height in meter)*/
markbmi=markweight/markheight**2;
johnbmi=johnweight/ (johnheight * johnheight);
console.log('MARK BMI' + '' +markbmi);
console.log('JOHN BMI' + '' + johnbmi);
console.log(markhigherbmi=(markbmi>johnbmi));

//template literals using=`$()`
const descriptionone=`${country} is in ${continent}, and its
${population} million people speak ${language}`;
console.log(descriptionone)

//if condition
if(population>33){
    console.log( country + ' population is above average');
}
else{
    console.log(country + ' population is below average')
}
//if else for bmi
if(markbmi>johnbmi){
    console.log("Marks Bmi higher than johns");
}
else if (johnbmi>markbmi){
    console.log("JOHNs Bmi higher then markbmi");
}
else{
    console.log("BOth equal bmi")
}