function detectWord(a){
  var hiddenWord="";
  for(i=0;i<a.length;i++){
      var singleLetter=a.charAt(i);
      if(singleLetter==singleLetter.toLowerCase()){
        hiddenWord=hiddenWord+singleLetter;

      }
     
  }  
  
return hiddenWord;
}
var hiddenWord=detectWord("UcLMLGAGGaTLSTt");
console.log(hiddenWord);

function canNest(arr1,arr2){
  if (!(Array.isArray(arr1)&&Array.isArray(arr2))) {
    return"Both values needed to Array";
    
  }
}
function isMagicArray(a){
      var sum=0;
      for(i=0; i<a.length; i++){
          var num=a[i];
          if(num==2){
              sum=sum+num;
          }
          
          var isprime=true;
          if(num>2){
              for(j=2; j<(num/2+1);j++){
                  if(num%j==0){
                      isprime=false;
                      
                  }
                  
              }
              if(isprime){
                  sum=sum+num;
              }
          }
      }
  if(a[0]==sum){
      return 1;
  }else{
      return 0;
  }
  }
  console.log(isMagicArray([3,1,2,4,6]));
  
  function isprime(n){
      if(n<2){
  return 0;
      }
      for(let i=2; i<=n/2; i++){
          if(n%i==0){
              return 0;
          }
      }
      return 1;
  }
  function isMagicArray(a){
      let sum=0;
      for (let index = 0; index < a.length; index++) {
         let x=isprime(a[index]);
         if(x==1){
             sum=sum+a[index];
         }
          
      }
      if(sum==a[0]){
          return 1;
      }else{
          return 0;
      }
  }
  console.log(isMagicArray([3,1,2,4,6]));

  function sumPrime(array){
    var sum=0;
    for (let index = 0; index < array.length; index++) {
      var num=array[index];
      if (num==2) {
        sum=sum+num;
      } 
      var isprime=true;
      if(num>2){
      for(j=2;j<num;j++){
if (num%j==0) {
  var isprime=false;
}
      }     
    }
    if(isprime){
    sum=sum+num;
  }
}
    if (array[0]==sum){
      return 1;
    }else{
      return 0;
    }
  }
  console.log(sumPrime([6,7,3,4,6]));
  

  function dec19sort(a){
    let numbers=a;
    let checker=true;
    while (checker) {
      checker=false;
  
    for (let index = 0; index < numbers.length-1; index++) {
      if (numbers[index]>numbers[index+1]) {
        checker=true;
      let temp=numbers[index];
       numbers[index]=numbers[index+1];
       numbers[index+1]=temp;
       
     }
      
    }
  }
    
    return numbers;
   
  }
  let ea=[12,9,33,5,89]
  let test=dec19sort(ea);
  console.log(test);


  function bubbleSort(arr){
    for (let index = 0; index < arr.length; index++) {
     for (let j = 1; j < arr.length; j++) {
       if (arr[j-1]>arr[j]) {
         let temp=arr[j-1];
         arr[j-1]=arr[j];
         arr[j]=temp;
         
       }
       
     }
      
    }
    return arr;
  }
  console.log(bubbleSort([5,3,7,8,4]));


//   Advanced JavaScript Algorithms - practice exercise
// Question 1 Given an array of numbers, write a function that prints in the console another array
// which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [2,6,4,8]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]

function  getOnlyEvens(a) {
answerArray=[];

for (let i = 0; i < a.length; i+=2) {
if (a[i]%2==0) {
  answerArray.push(a[i])
}
}
return answerArray;
}
mixedNumbers = [1, 2, 3, 6, 4, 8]
console.log(getOnlyEvens(mixedNumbers));
  

  


// Question 2
// ● Create a function that takes a two-digit number as an parameter and prints "Ok" in
// the console if the given string is greater than its reversed digit version. If not, the
// function will print "Not ok"
// ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
// ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32



// function reverseCompare(b){


// }


// Question 3
// ● Write a function that takes a positive integer and returns the factorial of the number.
// Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
// factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
// 4 * 3 * 2 * 1 = 24)
// ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// ○ Test 3: returnFactorial(0) outputs 1

function factorial(number){
  if (number === 0 || number === 1){
    return 1;
  }
  for(let i=number-1; i>=1;i--){
    number=number*i;
  }
  return number;
}
let check=factorial(3);
console.log(check);

// Question 4 (Meera array)
// ● A Meera array is defined to be an array containing only numbers as its elements and for
// all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
// because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
// 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
// array of numbered elements and prints “I am a Meera array” in the console if its array
// does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
// Meera array”
// ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
// 2 is 10
// ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
// ○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
// *2 is -6

function checkMeera(d){
  for(let i=0;i<d.length;i++){
    for(let j=0;j<d.length;j++){
      if (2*d[i]==d[j]) {
        return "I am NOT a Meera array";
      }
    }
  }
  return "I am a Meera array";
}

array=[10, 4, 0, 5];
console.log(checkMeera(array));

// // Question 5 (Dual array)
// // ● Define a Dual array to be an array where every value occurs exactly twice. For example,
// // {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
// // occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
// // times) Write a function named isDual that returns 1 if its array argument is a Dual array.
// // Otherwise it returns 0.

// function isDual(g){
//   for (let index = 0; index < g.length; index++) {
//     let counter=0;
//     for (let i = 0; i < g.length; i++) {
//       if (g[index]==g[i]) {
//         counter++;
        
//       }
     
//     }
//     if(counter!=2){
//       return 1;
//   }
//     }
//     return 0;
//   } 
// let dual=[1, 2, 1, 3, 3, 2,5];
// console.log(isDual(dual));

//it works form other text edditor

// function isDual(myArray){
//   if(myArray.length%2==1)
//   return0;
// }
// dualArray.sort((a,b)=>a=b);
// console.log(dualArray);
// for (let i = 0; i < myArray.length; i=i+2) {
//   if (myArray[i]!=myArray[i+1]) {
//     return 0;
//   }
  
// return 1;
// }
// // Question 6
// // ● Write a function that takes the number of seconds and returns the digital format clock
// // time as a string. Time should be counted from 00:00:00.
// // ○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
// // secs.
// // ■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
// // ■ digitalClock(87000) as "00:10:00" It's 00:10 next day.

// function convertHMS(value) {
//   const sec = parseInt(value, 10); // convert value to number if it's string
//   let hours   = Math.floor(sec / 3600); // get hours
//   let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
//   let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
//   // add 0 if value < 10; Example: 2 => 02
//   if (hours   < 10) {hours   = "0"+hours;}
//   if (minutes < 10) {minutes = "0"+minutes;}
//   if (seconds < 10) {seconds = "0"+seconds;}
//   return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
// }
// console.log(convertHMS(61201));



// // 3.Define an array to be packed if all its values are positive, each value n appears n times and all
// equal values are in consecutive locations. So for example, {2, 2, 3, 3, 3} is packed because 2
// appears twice and 3 appears three times. But {2, 3, 2, 3, 3} is not packed because the 2s are not
// in consecutive locations. And {2, 2, 2, 3, 3, 3} is not packed because 2 appears three times.








// 1. Define an array to be trivalent if all its elements are one of three different values. For
// example, {22, 19, 10, 10, 19, 22, 22, 10} is trivalent because all elements are either 10, 22, or 19.
// However, the array {1, 2, 2, 2, 2, 2, 2} is not trivalent because it contains only two different
// values (1, 2). The array {2, 2, 3, 3, 3, 3, 2, 41, 65} is not trivalent because it contains four
// different values (2, 3, 41, 65).
// Write a function named isTrivalent that returns 1 if its array argument is trivalent, otherwise it
// returns 0.


// 2. Define a cluster in an integer array to be a maximum sequence of elements that are all the
// same value. For example, in the array {3, 3, 3, 4, 4, 3, 2, 2, 2, 2, 4} there are 5 clusters, {3, 3, 3},
// {4, 4}, {3}, {2, 2, 2, 2} and {4}. A cluster-compression of an array replaces each cluster with
// the number that is repeated in the cluster. So, the cluster compression of the previous array
// would be {3, 4, 3, 2, 4}. The first cluster {3, 3, 3} is replaced by a single 3, and so on.




// 1. write a function that named vowelCounter which takes a single word and returns the number of vowels in the word
// vowels are(a, e, i, o, u)
// make sure you also include the capital letters to in your count
// eg animal - returns 3, Angel - returns 2


function checkVowels(str) {
  var vowelsCount = 0;
var string = str.toString();
for (var i = 0; i <= string.length - 1; i++) {
 if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
//let ave="kiflom"
console.log(checkVowels("animal"));


// var a=[1,"a,",9];
// console.log(a[2]);
// var o={
//   meleya1:1,
// meleya2:"a",
// meleya3:9,
// console.log(o["meleya3"]);
// };

let Abebe={
  firstName:"Abebe",
  lastName:"kebede",
  xx:function(){
    console.log("abebe beso bela");
  }
}
Abebe.xx();
console.log(Abebe.lastName);
let person={
  firstName:"chala",
  lastName:"bihonegn",
  someFunction: function(){
    return this.firstName
    + " " + this.lastName
  },
};
console.log(person);
person.firstName="tesfaye"
console.log(person);
console.log(person.firstName);
console.log(person["firstName"]);
console.log(person.someFunction());