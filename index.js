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

for(var i = 1; i <= 100; i++){
  switch(i){
    case (i % 3 == 0):
      console.log("Fizz")
      break;
    case(i % 5 == 0):
      console.log("Buzz")
      break;
    case (i % 3 == 0 && i % 5 == 0):
      console.log("FizzBuzz")
      break;
    default:
        console.log(i)
        break;
}
}

//ChessBoard









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