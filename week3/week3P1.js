//1
let name = "robert";
console.log(`First name: ${name}`);
console.log(name.toUpperCase());

//2
let nameLength = name.length;
console.log(`First Name Length is ${nameLength}`)

//3
let surname = "Tkatchenko";
console.log(`Surname: ${surname}`)
let fullName = name.concat(" ", surname);
console.log(`Fullname is ${fullName}`)

//4
let extraction = fullName.charAt(5);
console.log(`This fifth character extracted from the full name is: ${extraction}`);
console.log(`This fourth character searched from the full name is: ${fullName[4]}`);

//5
let replacement = fullName.replace("Tkatchenko", "Edwards");
console.log(`Fullname after replacement is ${replacement}`)

/*

Within this file, i demnstrated 5 string methods. 
This is inclusive of the toUpperCase(), length, concat(), extraction and property access, and finally replacement.

1. toUpperCase
2. Length
3. Concat
4. Extraction and Property Access
5. Replacement


*/

