'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  
var arr=[12, 32, 22, 45, 78, 12, 50]
const findMax = (arr)=>{
    let max=arr[0];
    for (let i=0;i<arr.length;i++)
    {
        if (max<arr[i])
        {max=arr[i]}
        
    }
    // write your code here
    return max;
}

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  
var arrTwo=[20, '234', 'car', 41, 20, 'chair']
const sumNums = (arrTwo)=>{
    let sum =0;
    for (let i=0 ; i<arrTwo.length ; i++ ){

        
        let  type = typeof(arrTwo[i])
            if (type == "number")
             {sum += arrTwo[i];}
    }
    // write your code here
    return sum;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  Required:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']
var arrt=['C#', 'JS', 'Ruby','Python']

const reverseArray = (arrt)=>{
var output=[]
while (arrt.length){
    output.push(arrt.pop())}
    return output
}

// -------------------------------------------------------------------------------------------------------

module.exports = {findMax , sumNums, reverseArray};