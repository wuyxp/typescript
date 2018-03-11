function sum(x:number,y:number):number{
  return x+y;
}
console.log(sum(1, 3));
let myAdd: (x:number, y:number) => number = function(x:number,y:number):number{
  return x+y;
}
function setName(firstName:string,middleName:string,lastName?:string):string{
  return firstName+middleName+lastName
}
function buildName(firstName:string,...restOfName:string[]):string{
  return firstName+restOfName.join(' ')
}
interface Card{
  suit:string;
  card:number;
}
interface Deck{
  suits:string[];
  cards:number[];
  createCardPicker(this:Deck) : () => Card;
}
let deck:Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function() {
    return ():Card => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return {suit: this.suits[pickedSuit], card: pickedCard % 13};
    }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
/**
 * 泛型
*/
function identity<T>(arg:T):T{
  return arg
}
let output = identity<string>('string');
function logging<T>(arg:T[]):T[]{
  return arg;
}
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}