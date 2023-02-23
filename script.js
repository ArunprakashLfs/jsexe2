const isisland=false;
//To asign the boolean data types 
const country="india";
const continent="asia";
//To Check the string
let population= 150 ;
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
console.log(population/2);
population++;
console.log(population);
console.log(population>6);
console.log(population<33);
const description=country +''+ "is in" +  "" + continent + "and its" + "" + "" + population+ "million speaks "+ language;
console.log(description);
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
//const numNeighboursInput = prompt('How many neighbour countries does your country have?',);
    // LATER : This helps us prevent bugs
/*const numNeighbours = Number(prompt('How many neighbour countries does your countryhave?'),);
if (numNeighbours === 1) {
    console.log('Only 1 border!');
}
else if (numNeighbours > 1) {
    console.log('More than 1 border');
} 
else {
    console.log('No borders');
}
*/

if (language === 'english' && population < 50 && !isIsland)
{
console.log(`You should live in ${country} :)`);
}
else {
console.log(`${country} does not meet your criteria :(`);
}

//two teams winning rate
const dolphinswinnings =(99+100+10) /3;
const kolaswinnings =(103+106+103) /3;

if(dolphinswinnings>kolaswinnings && dolphinswinnings>=100){
    console.log(`dolphins ${dolphinswinnings} are winners`);
}
else if(dolphinswinnings<kolaswinnings && kolaswinnings>=100){
    console.log(`kolas ${kolaswinnings}are winners`);
}
else if(dolphinswinnings===kolaswinnings){
    console.log("match draw")
}
else{
    console.log("no teams wins the trophy")
}

//switch statements
switch (language) {
    case 'Mandarin':
        console.log('MOST number of native speakers!')
    
        break;
    case 'Spanish':
        console.log("2nd place")
    
        break;
    case 'English':
        console.log("3rd place")
    
        break;

    default:console.log(`${language} not in top5`)
        break;
}
//ternary operator {condition?true:false}execution
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`,);

//challenge 4
let bills=230;

if (bills>50 && bills<=300){
    const  tips =(bills*0.15)
    const totalbill= bills+(bills*(15/100));
    console.log(`your bill was ${bills} and with tips ${tips} and total bill value ${totalbill}`);
}
else{
    const tips =(bills*0.20)
    const totalbill= bills+(bills*(20/100));
    console.log(`your bill was ${bills} and with tips ${tips} and total bill value ${totalbill}`)
}
// using tenary
const bill = 230;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


//Functions

function descripeCountry(country, population, capitalCity) {
    console.log(`${country} has ${population} people and its capital city is ${capitalCity}`);
}
descripeCountry("finland", "6million", "helsinki");
descripeCountry("india", "1.4billion", "delhi");
descripeCountry("usa","240Million", "Wasinktondc");

//Function declaration
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
    }
    const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
    };
    const percIndia1 = percentageOfWorld1(1400);
    const percChina1 = percentageOfWorld1(1441);
    const percUSA1 = percentageOfWorld1(332);
    console.log(percIndia1.toFixed(2) , percChina1.toFixed(2), percUSA1.toFixed(2));

//Arrow function
 const percentageOfWorld3 = population => ((population/7900)*100)
 const percIndia3 = percentageOfWorld3(1500);
 const percChina3 = percentageOfWorld3(1440);
 const percRussia3 = percentageOfWorld3(220);
 console.log(`India population percentage ${percIndia3.toFixed(1)}`);
 console.log(`China population percentage ${percChina3.toFixed(1)}`);
 console.log(`Russia population percentage ${percRussia3.toFixed(1)}`);

//function calling other function
const describePopulation = function (country, population){
    const percentage= percentageOfWorld1(population);
    const description= `${country} has the population ${population} of the ${percentage} of world`;
    console.log(description);
}
describePopulation("india", 140);

//coding challenge 5
const calcAverage= (score1, score2, score3) => ((score1+score2+score3)/3);
const avgDolphins=(calcAverage(12, 14,12));
const avgKolas=(calcAverage(85, 60, 22))
console.log(avgDolphins);
console.log(avgKolas);
function checkWinners(avgDolphins, avgKolas){
    if ((avgKolas*2)<=avgDolphins){
        console.log("Dolphin Wins")
    }else if ((avgDolphins*2)<=avgKolas) {
        
        console.log("kola wins")
    }
    else{
        console.log("No Result")
    }
}
checkWinners(avgDolphins,avgKolas);

//Arrays
const populations=[10, 140, 220, 240]
console.log(populations.length === 4);
const percentages = [
percentageOfWorld1(populations[0]),
percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]),
percentageOfWorld1(populations[3])
];
console.log(percentages);

//Basic Array operations
const neighbourCountry=["china", "pakistan", "srilanka", "Bangladesh" ]
neighbourCountry.push("utopia");
console.log(neighbourCountry);
neighbourCountry.pop();
console.log(neighbourCountry);
neighbourCountry[neighbourCountry.indexOf('china')] = 'Republic of china';
console.log(neighbourCountry);

//Coding Challenge #6
 
//using tip for array
function calcTip(bill) {
    return (bill+(bill*0.15));   
}
const bill1=calcTip(100);
console.log(bill1);