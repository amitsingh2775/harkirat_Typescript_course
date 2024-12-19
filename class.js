var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name,
            this.age = age;
    }
    Person.prototype.greet = function () {
        return "your name is " + this.name;
    };
    return Person;
}());
var personObject = new Person("amit", 21);
console.log(personObject.name);
console.log(personObject.greet());
var peers = {
    name: "amit",
    age: 21,
    genProps: {
        gender: "male",
        oriantation: "straight",
        pronounce: "he",
    }
};
console.log(peers);
