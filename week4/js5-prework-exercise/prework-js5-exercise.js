let person = {
    firstName: "Mario",
    lastName: "Hartleb",
    age: 37,
    austrian: true,
    japanese: false,
    hobbies: ["jogging","hiking","cooking"],
    fullName: function(){
        return this.firstName + '' + this.lastName;
    }

}
console.table(person);

let cat = new Object ();

cat.firstName = "Garfield";
cat.lastName = "Tiger";
cat.breed = "Siamese";
cat.age = 5;
cat.hobbies = ["eating","sleeping","playing"];
cat.fullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

console.table(cat);
console.log(cat.fullName());

document.getElementById("firstName").innerHTML = cat.firstName;
document.getElementById("lastName").innerHTML = cat.lastName;
document.getElementById("age").innerHTML = cat.age;


class Persons {
    firstName;
    lastName;
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        return this.firstName + " " + this.lastName; 
    }
}

class NewPersons extends Persons {
    age;
    constructor(firstName,lastName,age) {
        super(firstName,lastName)
        this.age = age;
    }

    fullName(){
        return `I am ${super.fullName()} and I am ${this.age} years old`;
    }
}

let person1 = new NewPersons ("Mario","Hartleb",37);
console.log(person1.fullName());