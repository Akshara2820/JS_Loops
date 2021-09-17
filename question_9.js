// for loop

const input=require("readline-sync");
const num=input.questionInt("enter the no: ")
sum=0
for (i=1; i<=num; i++){
    const num1=input.questionInt("enter the no:-")
    sum+=num1
}console.log(sum)



// while loop

i=1
sum=0
while (i<=10){
    const n1=require("readline-sync");
    const n2=n1.questionInt("enter the no:-")
    sum+=n2
    i++

}console.log(sum)


// Do while loop

i=1
sum=0
do{
    const num1=require("readline-sync");
    const num2=num1.questionInt("enter the no: ")
    sum+=num2
    i++
}while (i<=3)
console.log(sum)