var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var isDone = false;
var no = true;
var num = 0;
var floot = 1.1;
var firstName = 'aaa';
var lastName = 'bbb';
var fullName = "my name is " + firstName + " " + lastName;
var list = [1, 2, 3];
var list1 = ['a', 'b', 'c'];
var x;
x = ['abc', 1000];
var a = [1, 2, 'abc', null];
function setName(name) {
    this.name = name;
}
var createP;
createP = function (config) {
    return {
        name: 'abc',
        age: 18,
        isMan: false,
        x: 10
    };
};
var mySeach;
mySeach = function (sou, sub) {
    return true;
};
var myArray;
myArray = ['aaa', 'bbbb'];
var myStr = myArray[0];
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        this.age = 18;
    }
    Animal.setVersion = function (v) {
        Animal.version = v;
    };
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " move to " + distanceInMeters + "m");
    };
    Animal.version = 'v1.0.0';
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.bark = function () {
        console.log('woof woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog('qunzhu');
console.log(dog.name);
console.log(Animal.version);
Animal.setVersion('v1.0.1');
console.log(Animal.version);
// console.log(dog.age);
// dog.bark()
// dog.move(5)
// dog.bark()
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log('Slithing.....');
        _super.prototype.move.call(this, distanceInMeters);
    };
    Snake.prototype.bark = function () {
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 40; }
        console.log('papapa....');
        _super.prototype.move.call(this, distanceInMeters);
    };
    Horse.prototype.bark = function () {
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
// sam.move();
// tom.move(34); 
