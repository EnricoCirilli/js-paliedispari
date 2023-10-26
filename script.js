const userword = parseInt(prompt("Scrivimi una parola polindroma"));
const result = poli(userword);
//console.log(result);
//alert(result);

function poli(wordToTest) {
    let result = "";
    // Se il numero è divisibile per 2, salvo pari
    if(wordToTest === "anna") {
        result = "poli";
    } else {
        // Altrimenti salvo dispari
        result = "non poli";
    }
    // ritorno il risultato
    return result;
}


console.log(poli("anna"))