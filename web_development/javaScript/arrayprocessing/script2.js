const Students =["muskan" , "priya" , "Milki", "nihal"];

if(Students.includes("muskan")){
    console.log("eat something");
}
else{
    console.log("study something");
    
}

const numbers =[43,56,23,87,54,98,11,34];

const filterednumbers=numbers.filter((number)=> number>5);

const arrayMethodChanning=numbers.filter((number)=> number<=5).map((number)=> number*2);
console.log(arrayMethodChanning);


const data=[2,5,8,11,14,7,1,3,9,12,17,15];

let sum=0;
sum=data.reduce((sum,item)=> (sum= sum + item));
console.log(sum);
