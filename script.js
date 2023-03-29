// Day- 01
// Q1.
// function Abc() {
//     console.log(10+4) ;
// }
// Abc();
// result- 14

// Q2.
// function Sum(a,b) {
//     console.log( a+b);
// } 
// Sum(3,4);
// result- 7

// Q3.
//  let hello = () => {
//     return "Hello to JavaScript";
// }
// console.log(hello());
// result- Hello to JavaScript


// Q4.
// var x=21;
// var girl= function () {
//     console.log(x);
//     var x=20;
// };
// girl();
// result- undefined

// Q5.
// var x= 21;
// girl ();
// console.log(x);
// function girl() {
//     console.log(x);
// var x=20;

// };
// result- undefined 
//         21

// Q6.
// var x= 21;
// a();
// b();
// function a() {
//     x= 20;
//     console.log(x);
// };
// function b() {
//     x=40;
//     console.log(x);
// };
// reslut- 20,
//         40

// Q7.

// let fact = (num) => {
//    if(num < 0) {
//     return -1;

//    }
//    else if ( num === 0) {
//     return 1
//    } 
//    else {
//     return num * fact(num-1);
//    }

// }
// console.log(fact(5));
// result- 5!=> 1*2*3*4*5= 120

// Day-02 
// Q1. 
// Guess the Output
// function FindSum(a, b){
//     return a + b;
// }

// function DisplayData(data, batch){
//     console.log(`i am from ${data} and My batch is EA${batch}`)
// }

// DisplayData("PrepBytes", FindSum(10, 9));

// result- i am from PrepBytes and My batch is EA19

// Q2. 
// Guess the output
// Abc();
// const Abc = function(){
//      value = 20;
//     console.log(value);
// };
// result- ReferenceError: Cannot access 'Abc' before initialization.

// Q3. 
// Guess the output
// var a = 10;
// (function (){
//     console.log(a);
//     var a = 20;
// })();
// result- undefined

// Q4.
// Guess the Output
// const greet =  function(name){
//     return function(m){
    
//         console.log(`Hi!! ${name}, ${m}`);
//     }
// }
  
// const greet_message = greet('EA19');
// greet_message("Welcome To PrepBytes")
// result- Hi!! EA19, Welcome To PrepBytes