// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name)
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(name){
    let newCats = [...cats, name];
    return newCats

}

function prependCat(name){
    let coolCats = [name, ...cats];
    return coolCats;
}

function removeLastCat(){
    let coolerCats = cats.slice(0,2)
    return coolerCats
}

function removeFirstCat(){
    let coolestCats = cats.slice(1)
    return coolestCats
}