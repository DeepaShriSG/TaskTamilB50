//Anonyomus Function
//Example 1 :-Print the odd numbers in an array
// var arr = [12, 13, 14, 15, 16];
// var result = [];
// var odd = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };
// console.log(odd(arr));

//Immediately Invoked Function Expression
// (function odd(arr) {
//     var result = [];
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 != 0) {
//         result.push(arr[i]);
//       }
//     }
//     console.log(result);
//   })([12, 13, 14, 15, 16]);

//Arrow Function
// const od = (arr) => {
//   var result = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };
// console.log(od([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  
//--------------------------------------------------------------------------------

//Example 2:- Convert all the strings to title caps in a string array 
//Anonymous Function
// let str= "hi myself barbie";
// var caps= function(str){
// let arr= str.split(" ");
// for(var i=0;i<arr.length-1;i++){
//    arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }
// let result= arr.join(" ");
//  return result;
// };
// console.log(caps(str));

//Immediately Invoked Function Expression
// (function caps(str) {
//     var arr= str.split(" ");
//     for(var i=0;i<arr.length;i++){
//     arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }
//    var result= arr.join(" ");
//     return result;
//    console.log(result));
// })("hi myself barbie");

//Arrow Function
    // const caps = (str)=> {
    // const arr = str.split(" ");
    //       for (var i = 0; i < arr.length; i++) {
    //     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    //         }
    // const str2 = arr.join(" ");
    // return str2;
    // }; console.log(caps('i have learned something new today'));


//----------------------------------------------------------------------------------------
//Example 3:- Sum of all numbers in an array  
//Anonymous Function
// let arr = [1,2,3,4,5];
// var result= function(arr){
// var sum=0;
// for(var i=0;i<=arr.length-1;i++){
//    sum=arr[i]+sum;
// }return sum;
// };
// console.log(result(arr));

//Immediate Invoked Expression Function
// (function result(arr) {
//     var sum=0;
//     for(var i=0;i<=arr.length-1;i++){
//     sum=arr[i]+sum;
//    }
//    console.log(sum);
//   })([1,2,3,4,5]);



//Arrow Function

// const result = (arr) => {
//   var sum=0;
//      for(var i=0;i<=arr.length-1;i++)
//      {
//     sum=arr[i]+sum;
//       }
//       return sum;
// };
// console.log(result([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//-------------------------------------------------------------------------------------

//Example 4:- Return all the palindromes in an array 
// var arr = ["121","300","202","55","123"];
// var result=[];
// var res=[];
// var palindrome = function(arr){
// for(var i=0;i<=arr.length-1;i++)
// {
//     result.push(arr[i].split("").reverse().join(""));
//     if(result[i]===arr[i]){
//         res.push(result[i]);  
//     }
// } return res;
// };
// console.log(palindrome(arr));
 
//Arrow Funtion
// var result=[];
// var res=[];
// const palindrome = (arr) => 
// {
//   for(var i=0;i<=arr.length-1;i++)
//    {
//     result.push(arr[i].split("").reverse().join(""));
//     if(result[i]===arr[i])
//     {
//         res.push(result[i]);  
//     }
//     } 
//     return res;
// };
// console.log(palindrome(["121","300","202","55","123"]));