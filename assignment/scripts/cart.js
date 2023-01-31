const maxItem = 5
console.log('***** Cart Functions ******');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = []
console.log(basket.length, "current length");

/**
 * 
 * @param {string} string
 * @returns console.log(true)
 */

function addItem(string, array) {
    if (isFull(array) == false) {
        basket.push(string)
        return true;
    } else {
        console.log("your basket is full make better life choices");
        return false;
    }
    //return console.log(false)
}
console.log(addItem('six', basket));

basket = ['apple', 'orange', 'cherry']

function listItems(array) {
    for(let item of array) {
        console.log(item)
    }
}
listItems(basket);

/**
 *
 * @param {array} array
 * @returns
 */
function isFull(array){
    if(array.length < maxItem){
        return false
    }
    else {
        return true
    }
} 
console.log('is this array full?', isFull(basket))


function removeItem( string ) {
    let index = basket.indexOf( string );
    if ( index !== -1 ) {
        basket.splice( index, 1 );
        return `${string} was removed`
    } else {
        return null
    }
}
console.log(removeItem('orange'));


function empty() {
    basket = []
}
console.log(basket);
empty();
console.log(basket, "Empty basket");







