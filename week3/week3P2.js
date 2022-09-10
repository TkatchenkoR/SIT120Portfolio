//Number Array
const array1 = [2,4,6,8,10,12,14,16];
//String Array
const array2 = ["1", "3", "5", "7", "9", "11", "13", "15"];


//1
var toStringExample = array2.toString();
console.log(toStringExample);

//2
var arrayOfNumbers = array2.map(Number);
console.log(arrayOfNumbers);

//3
const numbers = array1.concat(arrayOfNumbers);
console.log(numbers)

//4
const sortedNumbers = numbers.sort(function(a, b){return a -b})
console.log(sortedNumbers);

//5
console.log(sortedNumbers.splice(0,5));

/*
Within this file, i demnstrated 5 array methods. 
1. toString
2. converting to integer from string
3. concating two arrays together
4. sorting array in ascending order
5. splicing array to get first 5 elements
*/

