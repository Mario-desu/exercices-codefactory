var text : string = "Hello world!";

console.log(text);


let done: boolean = true;

let decimal: number = 15;

let color: string = "Hello World";

console.log(decimal);


// let myArray: string[] = [“Fido”, “Fluffy”, “Fiona”];

// let weUseTheFallback: any = 1;

weUseTheFallback= "We learn TypeScript"; // This will work as a fallback type
console.log(weUseTheFallback);

let value : string = "Mario Nelson";
value = "John Due"; // it will work
// value =123 ; // it will not work
console.log(value);


// {
//     declare var myVariable = "blockScope";
//  }
//  console.log(myVariable);





var greeting = "Hello There";

// function hello() {
 
//    for (var i = 0; i < 5; i++) {
//        var greeting = "Ah the negotiator";
//    }
//    document.write(greeting);
// }
// hello();


var greeting = "Hello There";




function hello() {
 
   for (var i = 0; i < 5; i++) {
       let greeting = "Ah the negotiator";
   }
   document.write(greeting);
}
hello();

// hello()


// var myArray = [];

// for (var i = 0; i < 10; i++) {

//     let y = i;

//     myArray.push(()=> {

//         console.log(y, i);

//     })

// }


// for(let val of myArray){

//     val();

// }


var myArray = [];

for (let i = 0; i < 10; i++) {

    myArray.push(()=> {

        console.log(i);

    })

}


for(let val of myArray){

    val();

}

// const kenobi= {};
// kenobi[greeting] = "Hello There"; // This works!
// console.log(kenobi);


// @ts-check

// const kenobi = Object.freeze({"greeting": “Hello There”, "rank": “master”});

// kenobi.age = 25; // SyntaxError: Identifier 'kenobi' has already been declared


let singleLineStrings = 'hello ' +

    'there ' +

    'general ' +

    'kenobi ';

    document.write(singleLineStrings);

    
let multiLineStrings = `

hello

world

my

name

is

Mario`;

document.write(multiLineStrings);


const hero = {
    first: 'Obi-Wan',
    last: 'Kenobi',
    age: 25
 };


 
// {first} is short for {first: first}
const {first, last} = hero;
console.log(first); // Obi-Wan
console.log(last); // Kenobi


const jedi = ['Obi-Wan', 'Yoda'];
const [x, y] = jedi;
console.log(x); // Obi-Wan
console.log(y); // Yoda


// function myFunction(paramObject) {

//     console.log(paramObject.a);

// }

// f({ a: 25 }); // 25


//--------------------------------

// function myFunction(a, b, c="Obi-Wan") {
//     console.log(a+b+c);
//  }
//  myFunction("Yoda","Mace Windu"); // Yoda Mace Windu Obi-Wan

 
// let myArray = ["Yoda","Mace Windu", "Obi-Wan"];
// for (let i = 0; i < myArray.length; i++) {
//    console.log(myArray[i]);
// }




//-------------------------------------





// function greeting(name? : string): string {

//     if (name) {

//         return "General " + name;

//     } else {

//         return "Hello there";

//     }

// }

// var result = greeting("Kenobi");

// document.write(result);

// console.log(greet());



//----------------------

// var greeting = (name: string): string => {

//     if (name) {

//         return "General  " + name;

//     } else {

//         return "Hello There";

//     }

// };

// document.write(greeting('Kenobi'));

//-----------------------------------





var greeting: (name: string) => string = function(name) {
    if (name) {
        return "General " + name;
    } else {
        return "Hello there";
    }
 };
 document.write(greeting('Kenobi'));


 //----------------------------


 
function summing(a: number, b: number, callback: (result: number) => void) {
    callback(a + b);
 }
 

//----------------------------
 
var myFunction = function() { // callback
    console.log(“General Kenobi”);
 }
 function anotherFunction(ab: () => void) { // higher order function
    console.log(Hello There);
    ab();
 }
 anotherFunction(myFunction); // prints 'General Kenobi' then prints 'Hello There
 