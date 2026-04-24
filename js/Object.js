//singleton
const mySym = Symbol ("key1")


const jsUser={name:"rakshit",
    age :21,
  location:"ahmedabad",
email:"rakshitsoni@gmail.com",
isLoggedIn:false,
[mySym] : "mykey1",

lastLoginDays:["monday","sunday"]
}
//console.log(jsUser["email"]);
//console.log([mySym]);
jsUser.greeting = function(){
    console.log("hello js user");
}
console.log(jsUser.greeting());


jsUser.greetingtwo = function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsUser.greetingtwo());