function runFunction()
{
let num= document.getElementById(parseInt("number"));
var result;
if (num%2==0) {
    result="even number";
    
}
else{
    result="odd number"
}
document.getElementById("run").textContent=result
}