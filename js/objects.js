const myObject = {
    js:'java script',
    cpp :'c++',
    rb :'ruby',
    swift :"swift by apple"
}

for (const key in myObject) {
     //  console.log(`${key}short cut is for ${myObject[key]} `);
}

/*const programing =["js","rb","py","java","js"]
for (const key in programing) {
   console.log(programing[key]);
}*/

// for each
const programing =["js","rb","py","java","js"]
//programing.forEach(function (val) {
  //  console.log(val);
//});

//programing.forEach( (item)=> {
  //  console.log(item);
//})

//function printMe(item){
  //  console.log(item);
//}
//programing.forEach(printMe)

//programing.forEach((item,index,arr)=>{
//console.log(item,index,arr);
//})
 const myCoding =[
    {
        languageName : "javascript",
        languagefile :"js"
    },
    {
        languageName:"jsva",
        languagefile:"class"
    },


 ]
 myCoding.forEach( (item)=>{
    console.log(item.languageName);
 })