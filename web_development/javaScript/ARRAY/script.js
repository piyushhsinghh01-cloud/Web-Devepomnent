const ar1 =[1,2,3,4,5];
let ar2 =[1,2,3,4,5];

console.log(ar1);
console.log(ar2);

ar1[0]=20;
ar2=[1,2,3,4,5,6,7]

console.log(ar1);
console.log(ar2);


ar1[3]=30;
ar2=10;

console.log(ar1);
console.log(ar2);

const ch1=["abcd","dfgh","ijkl"];
console.log(ch1);

const arr=["apple","banana","mango","kaju"];
for(var i=0;i<arr.length;i++) {
    console.log(arr[i]);
}
console.log(arr[2]);




const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// Expected output: "tomato"
console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]






const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]



const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// Expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]


const array = [1, 2, 3];

const firstElement = array.shift();

console.log(array);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1



const array1 = [1, 2, 3];

const firstElement1 = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement1);
// Expected output: 1



const array2 = ["a", "b", "c"];

array2.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
