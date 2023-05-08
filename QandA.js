//Write a js program to check a given positve number is multiple of 3 or 7
//use %

const checkNum = (num) => {
  //   console.log(num);

  if (num % 3 === 0 || num % 7 === 0) {
    // console.log("num is multiple of 3 or 7.");
  } else {
    // console.log("num is not multiple of 3 or 7");
  }
};

// checkNum(30);

//======================================================================

//Write a js program to reverse the string "JsBootCamp"
let str1 = "JsBootCamp";

// str1.reverse(); method not found for string

let str2 = str1.split(""); //return Array

// console.log(str2.reverse().join(""));

// console.log(str2.reverse().join(""));

// console.log(typeof str2.reverse().join("")); // as join return String

//========================================================================

//Write a program to check the give string statrs with  or not

const str3 = "javaScript";

const checkString = (str) => {
  //
  // console.log(str);

  if (str.startsWith("java")) {
    // console.log("Strats with java.");
  } else {
    // console.log("Not starts with java.");
  }
};

checkString(str3);

//=======================================================================

//write a js prm to print student name using loop and map
const students = ["jone", "peter", "Alex", "Bob"];

// students.map((student, index) => console.log(student, index));

for (let student of students) {
  // console.log(student);
}

//====================================================================

//To calculate my age

let date = new Date();

let currentYr = date.getFullYear();

const calculateAge = (date) => {
  const myBirth = 1999;

  let myAge = date - myBirth;

  return myAge;
};

// console.log(calculateAge(currentYr));

//=========================================================================
//array element Sum
// use reduce and send (accumulator, element)

const nums = [1, 3, 4];
let sum = nums.reduce((acc, num) => acc + num);
// console.log(sum);

//================================================================

const str = "you should make it in reverse 0f each word";

const str_split = str.split(" ");
// console.log(str_split); //array

const str_split_rev = str_split.reverse();
// console.log(str_split_rev);

const str_split_rev_join = str_split_rev.join(" ");
// console.log(str_split_rev_join);

// =====================================================================================
const str_split_letter = str_split.map((item) =>
  item.split("").reverse().join("")
);
// console.log(str_split_letter);

const str_split_letter_join = str_split_letter.join(" ");

// console.log(str_split_letter_join);

//===========================================================================================

const find_max =
  "This is a string and you have to find the max char on its javascriptCode";

// console.log(find_max.length);

const find_max_split = find_max.split(" ");
console.log(find_max_split);

const find_max_split_word = find_max_split.map((word) => word.length);
console.log(find_max_split_word);

const find_max_split_word_set = new Set(find_max_split_word);
console.log(find_max_split_word_set);

const find_max_split_word_set_array = Array.from(find_max_split_word_set);
console.log(find_max_split_word_set_array);

const find_max_split_word_set_array_sort = find_max_split_word_set_array.sort(
  (a, b) => a - b
);
console.log(find_max_split_word_set_array_sort);

console.log(
  find_max_split_word_set_array_sort[
    find_max_split_word_set_array_sort.length - 1
  ]
);

const maxlenght =
  find_max_split_word_set_array_sort[
    find_max_split_word_set_array_sort.length - 1
  ];

const maxWord = find_max_split.find((w) => w.length === maxlenght);

console.log(maxWord);

// ===========================================================================?
// I can used import React as R from "react" too

//What is closuers ?
//==>combinations of two or more function which are nested to each other /lexical scpoe can be applied in it for variables

// We import { useState, useEffect} e.t.c using curly brackets.It is done by the distructuring property of js

// why we used map function in case of forEach ?
// // ==>it is bcz
// When rendering a list of elements in a React component, you often want to transform the data in some way before displaying it,
// such as formatting or filtering the data. With map, you can transform the data into a new array that can be used to render your UI,
// while with forEach, you would need to MANUALLY MANIPULATE  the data and store it in a separate array before rendering it.
// Another benefit of using map in React is that it RETURN A ARRAY OF REACT ELEMENT, which can be directly used in your JSX code.
// This makes your code more concise and easier to read, since you don't need to manually create an array of React elements yourself.

// why we used className instead of class in react ui/jsx ?
// =>In React, we use className instead of class to define CSS classes for components.
//  This is because class is a reserved keyword in JavaScript and cannot be used as an attribute name in JSX.

//what single threaded and multi-threaded ?
// ==> It means single executions of code at a time and multiple executions of code at a time.
//Note: js and react are single thread
//Note: while React uses the virtual DOM // reconsilations algorithem/process(compare the previous virsion and updates)
//
