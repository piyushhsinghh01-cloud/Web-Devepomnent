const language = "JavaScript";
console.log(language.charAt(0));
console.log(language.charAt(4));
console.log(language.charAt(9));



const language1 = "JavaScript";
console.log(language.at(0));
console.log(language.at(-1));
console.log(language.at(-2));



const text = "JavaScript";
console.log(text.slice(0, 4));
console.log(text.slice(4, 10));
console.log(text.slice(4));
console.log(text.slice(-6));



const text1 = "JavaScript";
console.log(text.substring(0, 4));
console.log(text.substring(4, 10));
console.log(text.substring(4));



const text2 = "Learn JavaScript";
console.log(text.indexOf("Java"));
console.log(text.indexOf("Script"));
console.log(text.indexOf("Python"));


const text3 = "hello hello";
console.log(text.lastIndexOf("hello"));
console.log(text.lastIndexOf("l"));



const email = "student@example.com";
console.log(email.includes("@"));
console.log(email.includes("gmail"));



const filename = "assignment.pdf";
console.log(filename.startsWith("assignment"));
console.log(filename.endsWith(".pdf"));
console.log(filename.endsWith(".jpg"));



const message = "HTML is useful. HTML is popular.";
console.log(message.replace("HTML", "JavaScript"));


const message1 = "HTML is useful. HTML is popular.";
console.log(message.replaceAll("HTML", "JavaScript"));


const text4 = "JavaScript Methods";
console.log(text.toUpperCase());


const text5 = "JavaScript Methods";
console.log(text.toLowerCase());


const name = "   Rahul Sharma   ";
console.log(name.trim());


const text6 = "   Hello   ";
console.log(text.trimStart());
console.log(text.trimEnd());


const first = "Hello";
const second = "Students";
console.log(first.concat(" ", second));


console.log("Hi ".repeat(3));
console.log("*".repeat(5));


const subjects = "HTML,JavaScript,React";
console.log(subjects.split(","));


const sentence = "JavaScript is useful";
console.log(sentence.split(" "));


const word = "CODE";
console.log(word.split(""));

console.log("HTML CSS JS".split());