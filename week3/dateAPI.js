const originalDate = new Date();
console.log(originalDate)

//toString
const dateString = originalDate.toUTCString();
console.log(dateString);

// getFullYear()
console.log(originalDate.getFullYear());

//getDate()
console.log(originalDate.getDate());

//getSeconds()
console.log(originalDate.getSeconds());

//getMinutes()
console.log(originalDate.getMinutes());

//setDate()
const changedDate = (originalDate.setDate(30));
console.log(changedDate)

// 5 Date Methods and 1-2 Sentences reflection
/*
Within this file i displayed the use of various Date methods, 
inclusive of new Date(), toUTCString, getting different time elements 
and setting time elements.
*/