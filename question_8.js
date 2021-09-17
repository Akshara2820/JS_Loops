//For loop

const input=require("readline-sync");
const num=input.questionInt("enter the num:-");
sum=0
for (i=1; i<=100; i++){
    sum+=i
}
console.log(sum)

// while loop 


const n=require("readline-sync");
const n1=n.questionInt("enter the num--");

i=1
sum=0
while (i<=n1){
    sum=sum+i
    i++
}console.log(sum);


//do while loop

const n2=require("readline-sync");
const n3=n2.questionInt("enter the no:");
i=1
sum=0
do{
    sum+=i
    i++
}while(i<=n3)
console.log(sum);