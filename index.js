// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push('Ralph')}
function destructivelyPrependCat(name){
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat(name){
    cats.pop()
}
function destructivelyRemoveFirstCat(name){
    cats.shift()
}

function appendCat(){
    const newCats=[...cats.slice(),'Broom']
    return newCats
}
function prependCat(){
    const newCats=['Arnold',...cats.slice()]
    return newCats
}
function removeLastCat(){
    const newCats=cats.slice(0,cats.length-1);
    return newCats
}
function removeFirstCat(){
    const newCats=cats.slice(1);
    return newCats
}