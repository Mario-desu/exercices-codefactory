var Dog = /** @class */ (function () {
    function Dog(dogName, dogBreed) {
        this.dogName = ""; // ②
        this.dogBreed = ""; // ②    
        this.dogName = dogName;
        this.dogBreed = dogBreed;
    }
    Dog.prototype.name = function () {
        return "This dogs name is " + this.dogName + " his breed is " + this.dogBreed;
    };
    Dog.prototype.toHeel = function () {
        return "Heel , " + this.dogName + "!"; // ⑤
    };
    return Dog;
}());
var awesomeDog = new Dog("Rex", "German Shepherd");
//this is an instance of a class (created object)
console.log(awesomeDog.name());
//This dogs name is Rex
console.log(awesomeDog.toHeel()); // "Heel, Rex!
var DogShort = /** @class */ (function () {
    function DogShort(dogName, dogBreed) {
        this.dogName = dogName;
        this.dogBreed = dogBreed;
    }
    return DogShort;
}());
var testDog = new DogShort("Fluffels", "Doberman");
console.log(testDog);
