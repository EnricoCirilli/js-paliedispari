const userPariDispari = prompt("scegli pari o dispari");
const userNumber = prompt("scegli un numero da 1 a 5");
console.log(userNumber);
alert(userNumber);


/*const resultNumber = (cpu + userNumber);
console.log(resultNumber);*/

function resultNumber(numberToCheck) {

    let cpu = Math.floor((Math.random() * 5) + 1);
    let resultNumber = cpu + userNumber;

    if (resultNumber % 2 === 0) {
        result = "even";
    } else {
        result = "odd";
    }

    console.log(resultNumber);

    let message = 0;
    if (userNumber === "even" && resultNumber === "even") {
        console.log("hai vinto");
    } else if (userNumber === "odd" && resultNumber === "odd") {
        console.log("Hai vinto");
    } else {
        console.log = ("hai perso!");
    }
     return result;
}
