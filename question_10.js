// For loop 

// const input=require("readline-sync");
// const num=input.questionInt("enter number: ");

// for (i=1; i<=num; i++){
//     if (i%2==0){
//         console.log("-"+i)
//     }
//     else{
//         console.log(i)
//     }

// }

// while loop 

// const num1=require("readline-sync");
// const num2=num1.questionInt("enter the num: ");

// i=1
// while (i<=num2){
//     if (i%2==0){
//         console.log("-"+i)
//     }
//     else{
//         console.log(i)
//     }
//     i++
// }

// Do while loop

const input1=require("readline-sync");
const number=input1.questionInt("enter number : ");

i=1
sum=0
do{
    if (i%2==0){
        console.log("-"+i)
    }
    else{
        console.log(i)
    }
    i++
}while (i<=number)