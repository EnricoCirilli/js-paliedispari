const userPariDispari = prompt("scegli pari o dispari");
const userNumber = prompt("scegli un numero da 1 a 5");
console.log(userNumber);

const resultNumber = (cpu + userNumber);
console.log(resultNumber);

function resultNumber() {

    let cpu = Math.floor((Math.random() * 5) + 1);
    let resultNumber = cpu + userNumber;
    console.log(resultNumber);
    if (resultNumber % 2 === 0) {
        result = "even";
    } else {
        result = "odd";
    }


    let message = 0;
    if (userNumber === "even" && resultNumber === "even") {
        console.log("hai vinto");
    } else if (userNumber === "odd" && resultNumber === "odd") {
        console.log("Hai vinto");
    } else {
        console.log = ("hai perso!");
    }

}
