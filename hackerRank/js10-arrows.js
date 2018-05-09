/* Objective

In this challenge, we practice using arrow functions. Check the attached tutorial for more details.

Task

Complete the function in the editor. It has one parameter: an array, . It must iterate through the array performing one of the following actions on each element:

If the element is even, multiply the element by .
If the element is odd, multiply the element by .
The function must then return the modified array. */

// first attempt
function modifyArray(nums) {
     let newNums = nums.map(num => {
         if (num % 2 === 0) {
             return num * 2
         } else {
             return num * 3;
         }
     })
     return newNums;   
 }

// refactored
function modArray(nums) {
    return nums.map(num => num % 2 === 0 ? num * 2 : num * 3 );
}