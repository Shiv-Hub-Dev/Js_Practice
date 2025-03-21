let arr = [1, 2, 3, 4, 5]
let newArray = new Array('a', 'b', 'c', 'd')
console.log(arr);//[1, 2, 3, 4, 5]
console.log(newArray);//['a', 'b', 'c', 'd']

//Array methods
/*
push() - Add elements in last of an array.
pop() - Removes the last element from an array and returns that element.
unshift() - Adds elements in first of an array.
shift() - Removes the first element from an array and returns that element.
join() - creates and returns a new string by concatenating all of the elements from array,
includes() - check the existence of elements in the array.
indexOf() - Returns the index at which a given element can be found in the array, or -1 if it is not present.
slice() - Extracts a section of an array and returns a new array.
splice() - Extracts a section of an array and returns a new array and also remove those element form array.
concat() - Combines two or more arrays and returns a new array.
spread Operator - Combines two or more arrays and returns a new array by breaking all elements of arrays.
flat(depth) - It creates a new array with all sub or nested arrays.
Array.isArray() - Checks if an given value is array.
Array.from() - Transforms data to an array.
Array.of() -  create a new array from a set of arguments.
filter() - Creates a new array with all elements that pass the test implemented by the provided function.
map() - Creates a new array with the results of calling a provided function on every element in the calling array.
reduce() - Reduces the array to a single value.
forEach() - Calls a provided function once for each element in the array.
sort() - Sorts the elements of an array in place and returns the array.
*/

// ----------push()----------
arr.push(6)
console.log(arr); // [1, 2, 3, 4, 5, 6]
// ----------pop()----------
let arrPop= arr.pop()
console.log(arr); // [1, 2, 3, 4, 5]
console.log(arrPop);//6

// ----------unshift()----------
arr.unshift(9)
console.log(arr);//[9,1, 2, 3, 4, 5]
// ----------shift()----------
let arrShift=arr.shift()
console.log(arr) //[1, 2, 3, 4, 5]
console.log(arrShift);//9


// ----------join()----------
console.log(arr.join());//1, 2, 3, 4, 5{type is string}


// ----------includes()----------
console.log(arr.includes(9));//false
console.log(arr.includes(2));//true


// ----------indexof()----------
console.log(arr.indexOf(2));//1
console.log(arr.indexOf(8));//-1


// ----------slice()----------
let arrSlice=arr.slice(1,4)
console.log(arrSlice);//[2,3,4]
console.log(arr);//[1, 2, 3, 4, 5]


// ----------splice()----------
let arrSplice=arr.splice(1,4)
console.log(arrSplice);//[2,3,4,5]
console.log(arr);//[1]

// ----------concat()----------
let array=[1,2,3,4,5]
let anotherArray=[6,7,8,9,10]
let combinedArray=array.concat(anotherArray)
console.log(combinedArray);//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// ----------spread Operator----------
let combinedArray2=[...array,...anotherArray]
console.log(combinedArray2);//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ----------fla()---------

let nestedArray=[1,2,[3,4,5],6,[7,[8,9,10]]]
let flatArray=nestedArray.flat(3)
console.log(flatArray);//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// ----------Array.isArray()----------
console.log(Array.isArray(array));//true
console.log(Array.isArray(nestedArray));//true
console.log(Array.isArray(123));//false

// ----------Array.from()----------
let arrayFrom=Array.from('Hello World')
console.log(arrayFrom);//['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
let arrayFrom1=Array.from({name:"Shiv"})
console.log(arrayFrom1);//[]

// ----------Array.of()----------
let arrayOf=Array.of(1,2,3,4,5)
console.log(arrayOf);//[1, 2, 3, 4, 5]
console.log(Array.of("Hello World"));//['Hello World']