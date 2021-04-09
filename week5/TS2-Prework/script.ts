class Dog{ // ①
    dogName = ""; // ②
    dogBreed = ""; // ②    
 constructor(dogName, dogBreed) { // ③
        this.dogName = dogName;
        this.dogBreed = dogBreed;
    }
    name() { // ④
        return `This dogs name is ${this.dogName} his breed is ${this.dogBreed}`;
    }
    toHeel() { // ④
        return `Heel , ${this.dogName}!`; // ⑤
    }
 }


 let awesomeDog = new Dog("Rex", "German Shepherd");
//this is an instance of a class (created object)


console.log(awesomeDog.name());
//This dogs name is Rex

console.log(awesomeDog.toHeel()); // "Heel, Rex!



class DogShort {
    constructor(private dogName, private dogBreed) {
    }
 }
 
 var testDog = new DogShort("Fluffels", "Doberman");
 
 console.log(testDog);