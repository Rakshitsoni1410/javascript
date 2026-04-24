//const tinderUser = new Object();
const tinderUser= {}
 tinderUser.id ="Rr1410"
 tinderUser.username= "rakhsu"
 tinderUser.isloggedIn= false
//console.log(tinderUser);
const regularUser = {
    email :"some@gmail.com",
fullname :{
    userfullname :{
        firstname :"rakshu",
        lastname :"soni"
    }
}

}
//console.log(regularUser.fullname.userfullname.firstname);
const obj1 ={
    1:"a",2:"B"
}
const obj2= {
    3:"a",4:"b"
}
const obj4={
    5:"f",4:"t"
}
//const obj3 = {obj1,obj2}
//const obj3 =Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2}
//console.log(obj3);
const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 2,
        email: "s@gmail.com"
    }
]
//console.log(users[0].email); // Output: "r@gmail.com"
//console.log(users[1].email); // Output: "s@gmail.com"
/*console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));*/
//console.log(tinderUser.hasOwenproperty('isLoggedIn'));

const course = {
    coursename : "js in gujarati",
    price :"100",
    courseInstructor :"rakshit",

}
//course.courseInstructor
const{courseInstructor : instructor}=course
console.log(courseInstructor);
/*{
    "name" : "rakshit",
    "coursename" :" js in eng",
    "price" :"free"

}*/


