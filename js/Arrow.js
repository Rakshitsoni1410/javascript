const user= {
    username  :"rakshit",
    price :969,
    
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
     
}


//user.welcomeMessage()
//user.username="raj"
//user.welcomeMessage()

//console.log(this);

/*function crush() {
    let username ="rakhit"
    console.log(this.username);
}
crush()*/


/*const crush = function () {
    let username = "rakshit"
    console.log(this.username);
    
}*/

const crush =  ()  =>  {
    let username = "rakshit"
    console.log(this);
    
}
//crush()
//const addtwo = (num1 ,num2)         =>  num1+num2 


//const addtwo =(num1 ,num2) =>(num1+num2)

const addtwo = (num1,num2) =>({username:"rakhshit"})

console.log(addtwo(3,7));

//const myArray = [2,2,6,9,7 ]

//myArray.forEach()