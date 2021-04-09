var text = "Hello world!";
console.log(text);
var done = true;
var decimal = 15;
var color = "Hello World";
console.log(decimal);
// let myArray: string[] = [“Fido”, “Fluffy”, “Fiona”];
// let weUseTheFallback: any = 1;
weUseTheFallback = "We learn TypeScript"; // This will work as a fallback type
console.log(weUseTheFallback);
var value = "Mario Nelson";
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
        var greeting_1 = "Ah the negotiator";
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
var _loop_1 = function (i) {
    myArray.push(function () {
        console.log(i);
    });
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var val = myArray_1[_i];
    val();
}
// const kenobi= {};
// kenobi[greeting] = "Hello There"; // This works!
// console.log(kenobi);
// @ts-check
// const kenobi = Object.freeze({"greeting": “Hello There”, "rank": “master”});
// kenobi.age = 25; // SyntaxError: Identifier 'kenobi' has already been declared
var singleLineStrings = 'hello ' +
    'there ' +
    'general ' +
    'kenobi ';
document.write(singleLineStrings);
var multiLineStrings = "\n\nhello\n\nworld\n\nmy\n\nname\n\nis\n\nMario";
document.write(multiLineStrings);
var hero = {
    first: 'Obi-Wan',
    last: 'Kenobi',
    age: 25
};
// {first} is short for {first: first}
var first = hero.first, last = hero.last;
console.log(first); // Obi-Wan
console.log(last); // Kenobi
var jedi = ['Obi-Wan', 'Yoda'];
var x = jedi[0], y = jedi[1];
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
var greeting = function (name) {
    if (name) {
        return "General " + name;
    }
    else {
        return "Hello there";
    }
};
document.write(greeting('Kenobi'));
//----------------------------
function summing(a, b, callback) {
    callback(a + b);
}
//----------------------------
var myFunction = function () {
    console.log(General, Kenobi);
};
function anotherFunction(ab) {
    console.log(Hello, There);
    ab();
}
anotherFunction(myFunction); // prints 'General Kenobi' then prints 'Hello There
