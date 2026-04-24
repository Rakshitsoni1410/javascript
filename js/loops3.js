//const programing =["js","rb","py","java","js"]

//const values =programing.forEach((item)=>{
    //console.log(item);
    //return item;
//})
//console.log(values);


//const newnums=myNo.filter((num)=>{
  // return num >4
//}) 

//const newnums=[]
//myNo.forEach((num)=>{
    //if (num>4) {
      //  newnums.push(num)
    //}
//})
  //  console.log(newnums);

//  const newnum= [1,3,2,6,4,5,7,9,8,10]
  //const newnums=newnum.map( (num)=>num +10)
  //const newnums =newnum
    //        .map((num)=>num*10)
      //      .map((num)=>num+10)
  //console.log(newnums);

  //reduce
  const myNo =[2,4,5]

 //const mytotal= myNo.reduce(function(acc,curvalue){
   // console.log(`acc:${acc}and currval:${curvalue}`); 
   // return acc+curvalue;

// }
//,0)
//const mytotal = myNo.reduce((acc,currval)=>acc+currval,0)
//console.log(mytotal);

const shopping =[
    {
        itemName :"js course",
        price :3000
    }, 
       {
        itemName :"java course",
        price :3509
    },
]

const pricetopay=shopping.reduce((acc,item)=>acc +item.price,0)
console.log(pricetopay
);