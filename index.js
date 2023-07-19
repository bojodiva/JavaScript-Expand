//Looping a triangle
var hash = "";
for(var i = 1; i <= 7; i++){
  console.log(hash += "#");
}


//FizzBuzz
for(var i = 1; i <= 100; i++){
  if( i % 3 == 0){
    console.log("Fizz");
  }else if(i % 5 == 0){
    console.log("Buzz");
  }else if(i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz");
  }else{
    console.log(i);
  }
}


//OR

//here is where i don't know why the code doesn't work
//i have resolved it now
for(var i = 1; i <= 100; i++){
  switch(true){
    case (i % 3 == 0 && i % 5 == 0):
      console.log("FizzBuzz")
      break;
    case (i % 3 == 0):
      console.log("Fizz")
      break;
    case(i % 5 == 0):
      console.log("Buzz")
      break;
    default:
        console.log(i)
        break;
}
}

//ChessBoard
let result = "";
for(let i = 1; i <= 8; i++){
   if( i % 2 !== 0){
     result +=" # # # #\n";
   }else{
     result += "# # # # \n";
   }
}
console.log(result);
  








//                   CHAPTER THREE

//Minimum
function min(a, b){
  return Math.min(a, b);
}
console.log(min(0, -10))


//Recursion
const isEven = (a) => {
    if(a % 2 == 0){
      return true
    }else{
      return false
    }
}
console.log(isEven(55))


//Bean Counting
//plain function
function countBs(str){
  let counter = 0;
  for(let i = 0; i <= str.length; i++){
         if(str[i] == "B"){
         counter += 1
       }
 }
 return counter;
}
console.log(countBs("BoBo"))



//modified function
function countChar(str, a){
  let count = 0;
  for(let i = 0; i <= str.length; i++){
    if(str[i] == a){
      count++
    }
  }
  return count;
}
console.log(countChar("kpk", "k"))





//           CHAPTER FOUR

// reversing an array(the function that returns a new array)
function reverseArray(arr){
  let newArr = [];
  for(let i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverseArray(["1", "2", "3"]));

//reversing an array( the function in which the array passed as argument is only modified)
function reverseArrayInPlace(arr){
  return arr.reverse();
}
console.log(reverseArrayInPlace(["1", "2", "3"]));


//Deep comparison
function deepEqual(first, last){
  if(first === last){
return true;
}

if( typeof first === "object" && typeof last === "object"){
let first_keys = Object.keys(first);
let last_keys = Object.keys(last);

if(first_keys.length !== last_keys.length){
return false;
}

for(let i = 0; i <= first_keys.length; i++){
   let key1 = first_keys[i];
  for(let j = 0; j <= last_keys.length; j++){
    let key2 = last_keys[j];
    if(key1 !== key2){
return false;
}}}}
 return true;
}



//the sum of a range
function range(start, end){
let arr = [];
for(let i = start; i <= end; i++){
  arr.push(i);
}
return arr;
}
console.log(range(1, 10));


function sum(values){
let count = 0;
for(let i = 0; i < values.length; i++){
count += values[i];
}
return count;
}
console.log(sum([1, 2, 3]));

// range with a step
function extraRange(start, end, step){
let newArr = [];
  if(step < 0){
    for(let i = start; i >= end; i += step ){
  newArr.push(i);
}}else{
for(let i = start; i <= end; i += step ){
  newArr.push(i);
}}
return newArr;
}
console.log(extraRange(1, 10, 2));
console.log(extraRange(5, 1, -1))


//converting array to list and vice versa

function arrayToList(arr){
let my_list = null;
for(let i = arr.length - 1; i >= 0; i--){
  my_list = {value: arr[i], rest: my_list}
}
return my_list;
}
console.log(arrayToList([1, 2, 3]));


function listToArray(listed){
return Array.from(listed);
        }
console.log();




//        CHAPTER FIVE

let array = [[1, 2, 3], [4, 5], [6]];

const flattenedArray = array.reduce((accumulator, current) => {
    accumulator.concat(current);
});

console.log(flattenedArray);



document.getElementsById
querySelector