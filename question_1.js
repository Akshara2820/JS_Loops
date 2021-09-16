const input=require("readline-sync");
var name=input.question("enter name: ")
const store=name;
var string=""
for (let i=name.length-1;i>=0;i--) {
   string=string+name[i]
}
if (store===string) {
   console.log("its palindrome string---"+store)
}
else {
   console.log("it's not a palindrome string---"+store)
}