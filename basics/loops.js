

// ----------for loop---------{It is used to iterate through a block of code a specified number of times}

for (let index = 0; index<=5; index++) {
    // console.log(`"outer loop" ${index}`);
    for(let i=0;i<=7;i++) {
        // console.log( i);  
    }    
}

// ----------break---------{When you want to exit from the loop when a condition is true}
for(let i=1;i<=10;i++){
    if(i==5){
        // console.log("5 is detected");
        break;
    }
    // console.log(i);    
}

// ----------continue---------{When you want to skip some iterations based on the condition}
for(let i=1;i<=10;i++){
    if(i==5){
        // console.log("5 is detected");
        continue        
    }
    // console.log(i);    
}

// ----------while loop---------{It is used to iterate through a block of code as long as a specified condition is true}

let arr=["a", "b", "c", "d", "e"]
let i=0
while(i<arr.length){
    // console.log(arr[i]);
    i++ 
}
let index=1
while(index<4){
    // console.log(index);
    index++
}

// ----------do-while loop---------{It is used to iterate through a block of code once, then test the condition before reiterating}
let j=0
do{
    console.log(j);//
    j++;
}while(j<6)

let index1=5
do{
    // console.log(index1);//5
    index1++
    
}while(index1<4)
