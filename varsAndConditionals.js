/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack ) {
    console.log("Jon Snow has better attack than Jamie Lannister");
} else if (jonSnowAttack < jamieLannisterAttack )  {
    console.log("Jamie Lannister has better attack than Jon Snow");
} else {
    console.log("Jamie Lannister has the same attack as Jon Snow");  
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log("Jon Snow has been slain.");
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`);
}

jonSnowDefense += 25;

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log("John Snow has been slain");
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`); 
}

let backpack = [];

backpack.push("sword", "shield", "food");

let externalItems = [];

//backpack.splice(1,1);
externalItems.push(backpack.shift());

let furCoat = "fur coat";

backpack.push(furCoat);


externalItems.push(backpack.pop());
console.log(backpack);
console.log(externalItems);

let itemCount = backpack.length;
console.log(itemCount);

backpack.push("flint", "blanket", "knife", "toothbtush");

let saddlebags = backpack.splice(2, 4);
console.log(saddlebags[0]);

for(let i = 0; i < saddlebags.length; i++){
    console.log(`saddlebags item: ${saddlebags[i]}`);
}

if(backpack.length >= 3){
    for(let i = 0; i < 3; i++){

    console.log("backpack item: " + backpack[i]);
    }
}else{
    for(let i = 0; i < backpack.length; i++){
        console.log("backpack item: " + backpack[i])
    }
};

let guessMe = 51;
let timeRan = 0;
while(guessMe < 100){
    console.log(guessMe);
    if(guessMe % 4 === 0 || guessMe % 5 === 0){
            console.log("guessMe is divisible by 4 or 5");
            guessMe += 25;
    }else if(guessMe % 3 === 0){
        console.log("guessMe is divisible by 3, subtracted 27");
        guessMe -= 27;
    }else{
        console.log("added 3")
        guessMe += 3;
    }
    guessMe += 22;
    console.log(`guessMe is now ${guessMe}`)
}

console.log(timerRan)
