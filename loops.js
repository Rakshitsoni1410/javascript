//for

/*for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==7) {
        console.log(" 7 is for thala for reason");
    }
    console.log(element);
}*/
/*for (let i = 0; i <=10; i++) {
    console.log(`outerloop value :${i}`);
    
    for (let j = 0; j < i; j++) {
       //console.log(`Inner loop value:${j}and inner loop:${i}`); 
     console.log(i+'*'+j+'='+ i*j);   
    }
    
}*/

let myArray = ["flash","spiderman","superman","batman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
  //  console.log(element);
    
}

// break

/*for (let index = 1; index <=20; index++) {
    if (index==5) {
        console.log(`deteckeed 5`);
    break
    }
    console.log(`value of i is ${index}`);
    
}*/

// continue
/*for (let index = 1; index < 20;index++){
    if (index==5) {
        console.log(`deteckeed 5`);
    continue
    }
    console.log(`value of i is ${index}`);
}*/

//while loop
/*let i =0;
while (i <=10) {
    console.log(`value of  i  is${i}`);
    i= i+2;
}*/
  
/*let myArray = ['flash', 'batman', 'uperman'];
let arr = 0;
while (arr < myArray.length) {
    console.log(`value of ${myArray[arr]}`);
    arr = arr + 1;
}*/
let score =11;
do{
    console.log(`score is ${score}`);
    score++
}while (score<=10);
