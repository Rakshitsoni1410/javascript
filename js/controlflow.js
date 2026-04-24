// if
const isUserlogged= true;

const temp = 53;

// if (isUserlogged) {
    
 //}
// if else
 
 /*if (temp<=50) {
  console.log("less than 50");  
 }
 else{
 console.log("temp more than 50");}*/
  // scope example
 /*const score = 200

if (score >110) {
    let   power = "fly"
    console.log(`user power:${power}`);
} else {
    
}*/

//const balance=1000
//if (balance >500) console.log("test");

/*if (balance<500) {
    console.log("less then 500");
} else if(balance<750) {
    console.log("less then 750");
    
}
else{
    console.log("equal 1000");
}*/

const Userlogged =true;
const debitCard =true;
const loggedInfromGoogle =false
const loggedInfromEmail = true
if (Userlogged&&debitCard) {
    console.log("you welcome");
} else {
    console.log(" error in process");
    
}
if (loggedInfromGoogle||loggedInfromEmail) {
    console.log("you can logged in");
}