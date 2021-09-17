// for loop 

const input=require("readline-sync");
const num=input.question("enter any String: ");

const store=num;
var string=""
for (let i=num.length-1;i>=0;i--) {
   string=string+num[i]
}
if (store===string) {
   console.log("its palindrome string---"+store)
}
else {
   console.log("it's not a palindrome string---"+store)
}

// while loop 


const n=require("readline-sync");
const num1=n.question("enter any string: ");
const store1=num1;
var string=""
i=num1.length-1;
while (i>=0){
    string+=num1[i];
    i--
}
if (store1===string){
    console.log("it is palindrome string---"+store1)
}
else{
    console.log("it is not a palindrome string---"+store1)
}

// do loop

const n1=require("readline-sync");
const num2=n1.question("enter any string--");
const store2=num2
var string=""
i=num2.length-1
do{
    string+=num2[i];
    i--
}while(i>=0);
if (store2===string){
    console.log("it is a palindrome string. ");
}
else{
    console.log("it is not a plaindrome string.");
}
