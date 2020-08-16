/****************************************************************************************************
 1. Write a function that takes an array of numbers and removes all negatives numbers from it
*****************************************************************************************************/
function removeNegative(arr) {
    if (!arr) {
      return false;
    }
    let temp = [];
    for (let i = 0;  i < arr.length; i++) {
      if (arr[i] > -1) {
        temp.push(arr[i]);
      }
    }
    return temp;
  }
  
  let m = [-3, 5, 1, 3, 2, 10, -7];
  
  console.log(m, removeNegative(m));
/****************************************************************************************************
2. Write a function that takes a string and determines if it's a valid email a valid email is a string
                that has a '@' symbol in the middle of it
*****************************************************************************************************/
function isValidEmail(email){
  const reslt = email.split('@');
  return reslt.length === 2;

}
console.log(isValidEmail(prompt("enter Email")));

/****************************************************************************************************
    3.Write a function that takes an array of strings and reverses them one by one
*****************************************************************************************************/
function reverseStrings(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].split('').reverse().join(''));
  }
  return result;
}
console.log(reverseStrings(['abc', 'def', 'ghj']) );


/****************************************************************************************************
2. Write a function that takes a string and determines if it's a valid email a valid email is a string
                that has a '@' symbol in the middle of it
*****************************************************************************************************/

// // function isValidEmail(email){
    
// //     let validator;
// //          validator = /\S+@\S+\.\S+/;
// //         return validator.test(email);
// //     }
    
// // console.log(isValidEmail(prompt("enter a number ")));

 /**************************************************************************************
  sidaaana waa looqori karaaa
  /*************************************************************************************/
// function validateEmail(email) {
//     let at = email.indexOf("@");
//     let dot = email.lastIndexOf("\.");
//     return email.length > 0 &&
//       at > 0 &&
//       dot > at + 1 &&
//       dot < email.length &&
//       email[at + 1] !== "." &&
//       email.indexOf(" ") === -1 &&
//       email.indexOf("..") === -1;
//   }
  
//   function assert(a, b) {
//     return a == b;
//   }
//   console.log(assert(validateEmail(prompt("enter email")), true));

// /****************************************************************************************************
//     3.Write a function that takes an array of strings and reverses them one by one
// *****************************************************************************************************/

// function reverseString(str){
//     let stringRev ="";
//     for(let i= 0; i<str.length; i++){
//         stringRev = str[i]+stringRev;
//     }
//     return stringRev;
// }
// console.log(reverseString("abc', 'def', 'ghj"));

 /**************************************************************************************
  sidaaana waa looqori karaaa
  /*************************************************************************************/

// function rever (arr){
//     let result = [];
//     for(let i = 0; i < arr.length; i ++){
//         result.push(arr[i].split("").reverse().join(""));
//     }
//     return result;
// }
// console.log(rever("abc', 'def', 'ghj"));

// /****************************************************************************************************
//  1. Write a function that takes an array of numbers and removes all negatives numbers from it
//                                         Different Format
// *****************************************************************************************************/

// let x = [-5, 1, -59, 15, 94, 305, -200];

// function removeItem(array, index) {
//     for (let i = index; i < array.length - 1; i++) {
//         array[i] = array[i + 1];
//     }
//     array.pop();
// }

// for (var i = 0; i < x.length; i++) {
//     if (x[i] < 0) {
//         removeItem(x, i);
//     }
// }

// console.log(x);


