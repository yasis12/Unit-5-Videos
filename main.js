console.log('Hello world!');

//Object Literals
let card0 = {
    suit: 'Hearts',
    number: 2
} //end card0

let card1 = {
    suit: 'Spades',
    number: 1
} //end card1

function isRed ( cardToCheck ){
    console.log( 'in isRed:', cardToCheck);
    if(cardToCheck.suit === 'Hearts' || cardToCheck.suit === 'Diamonds'){
        return true;
    } else {
        return false;
    } //end !red
} //end isRed

console.log(isRed (card0));
console.log(isRed (card1));