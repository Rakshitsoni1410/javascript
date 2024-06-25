// date
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
//let myCreatedDate  = new Date(2020,10,25)
//console.log(myCreatedDate.toDateString());
//let myCreatedDate  = new Date(2020,10,25,5,3)
let myCreatedDate = new Date("2021-01-25")
//console.log(myCreatedDate.toLocaleString());
let myTimeStamp  = Date.now()
//console.log(myTimeStamp); 
//console.log(myCreatedDate.getTime());
//console.log(Date.now()/1000);
//console.log(Math.floor(Date.now()/1000));
let newDate  =new Date()
//console.log(newDate.getMonth()+1);
//console.log(newDate.getDate());
newDate .toLocaleString('default',{
    weekday:"long",
})