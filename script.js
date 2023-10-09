// JavaScript Assignment 3:
// 1. Create a function that takes a parameter, the  parameter should expect an array of numbers when the function is invoked. 
// This function should return an object of key value pairs, the key should be the number in the array and the value should be the number of
//  times that number(key) appears in the array.
// Example: [1,2,2,3,3,4,4,5,5,5]
// Return value on console: {"1":1, "2":2, "3":2, "4":2, "5": 3}

let objectValue = {}

function returnObj(arr){
    if(Array.isArray(arr)){

        arr.map(item =>{
            if(isNaN(arr[item])){
                return `The Array must consist of only a number`;
            }else{
                if(objectValue[item] === undefined){
                    objectValue[item]= 1;
                }
                    objectValue[item]++
            } 
        })
        return objectValue;
    
    }else{
        return `Input must be an array!!!`
    }
}

console.log(returnObj([1,2,2,3,3,4,4,5,5,5]))
