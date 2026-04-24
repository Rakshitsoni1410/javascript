

function sayMyname(){
    console.log("R");
console.log("a");
}
//sayMyname()

//function addtwono(no1,no2){
  //console.log( no1+no2);
//}

function addtwono(no1,no2){
   
//let result= no1+no2
//return result;
return no1+no2

}
  
const result = addtwono(3,5);
//console.log("result",result);

function loginUser(username  ="same"){
    if (!undefined) {
        console.log("place enter the username ");
        return
    }
    return `${username}just logged in`
}
//console.log(loginUser("rakshit"));
//console.log(loginUser("raj"));

function calculateCartprice(...num1){
    return num1;
}
//console.log(calculateCartprice(200,2136,18));

const user={
    username:"rakshit",
    price :299,

}
function handleObject (anyobject){

    console.log(`Username is ${anyobject.username}and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username:"rakshit",
    price:309
})

const myNewArray =[200,400,200,600]

function returnSec(getArray) {
    return getArray[3]
}
console.log(returnSec(myNewArray));