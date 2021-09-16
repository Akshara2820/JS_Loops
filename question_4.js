// for loop 

const input=require("readline-sync");
const num2=input.questionInt("enter the number:-");

for (i=1; i<=10; i++){
    number=num2*i;
    console.log(num2+"*"+i+"= "+number);
}

// while loop


const n=require("readline-sync");
const num1=n.questionInt("enter the no:-");
i=1
while (i<=10){
    number=num1*i;
    console.log(num1+"*"+i+"= "+number)
    i++
}

// do loop 

const n1=require("readline-sync");
const num=n1.questionInt("enter no--");

i=1
do{
    number=num*i;
    i++
    console.log(num+"*"+i+"= "+number)

}while(i<=10)
