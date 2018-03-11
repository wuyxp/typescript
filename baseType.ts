let isDone:boolean = false;
let no:boolean = true;
let num:number = 0;
let floot:number = 1.1;
let firstName:string = 'aaa'
let lastName: string = 'bbb'
let fullName: string = `my name is ${firstName} ${lastName}`
let list: number[] = [1,2,3]
let list1: Array<string> = ['a','b','c']
let x:[string,number]
x = ['abc', 1000]
let a: Array<any> = [1,2,'abc',null]
function setName(name:string):void{
  this.name = name;
}

interface config{
  name:string;
  age:number;
  isMan:boolean;
  work?:string;
  readonly x:number;
}
interface Person1{
  name:string;
  age:number;
  isMan:boolean;
  work?:string;
  x:number;
}
interface createPerson{
  (config):Person1;
}
let createP : createPerson;
createP = (config:config) => {
  return {
    name:'abc',
    age: 18,
    isMan: false,
    x: 10
  }
}
interface SeachFun{
  (source:string,subString:string):boolean;
}
let mySeach : SeachFun
mySeach = function(sou,sub){
  return true;
}

interface stringArray{
  [index:number]:string
}
let myArray : stringArray;
myArray = ['aaa','bbbb'];
let myStr: string = myArray[0]


abstract class Animal{
  static version:string = 'v1.0.0';
  static setVersion(v:string):void{
    Animal.version = v;
  }
  public name: string;
  private age: number;
  public constructor(name:string){
    this.name = name;
    this.age = 18;
  }
  public move(distanceInMeters:number = 0):void{
    console.log(`${this.name} move to ${distanceInMeters}m`);
  }
  abstract bark(speek:string):void;
}
class Dog extends Animal{
  constructor(name:string){
    super(name)
  }
  bark(){
    console.log('woof woof!');
  }
}
const dog = new Dog('qunzhu');
console.log(dog.name);
console.log(Animal.version);
Animal.setVersion('v1.0.1');
console.log(Animal.version);
// console.log(dog.age);
// dog.bark()
// dog.move(5)
// dog.bark()

class Snake extends Animal{
  constructor(name:string){
    super(name)
  }
  move(distanceInMeters = 5){
    console.log('Slithing.....')
    super.move(distanceInMeters);
  }
  bark(){

  }
}

class Horse extends Animal{
  constructor(name:string){
    super(name)
  }
  move(distanceInMeters = 40){
    console.log('papapa....')
    super.move(distanceInMeters)
  }
  bark(){

  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

// sam.move();
// tom.move(34); 



