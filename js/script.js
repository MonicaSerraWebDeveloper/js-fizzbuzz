// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero 
// per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


const divContainer = document.querySelector('.box-container'); // Creare una variabile per contenere un div con una classe

for (let i = 1; i <= 100; i++) { // Creiamo un ciclo che ci permetta di stampare in console i numeri da 1 a 100

    let multipleNumber;
    if (i % 3 === 0 && i % 5 === 0) { // Andiamo a stabilire con if che i multipli sia di 3 che di 5 gli venga assegnata la stringa "FizzBuzz"
        multipleNumber = 'BuzzFizz';
    }  else if (i % 3 === 0) { // Andiamo a stabilire con else if che i multipli di 3 gli venga assegnata la stringa "Fizz"
        multipleNumber = 'Fizz';
    } else if (i % 5 === 0) { // Andiamo a stabilire con else if che i multipli di 5 gli venga assegnata la stringa "Buzz"
        multipleNumber = 'Buzz';
    } else { // Per tutti numeri restanti andiamo a dargli il valore numerico corrispondente a i
        multipleNumber = i; 
    }      

    const listNumbersAndString = document.createElement('div'); // Creiamo un div per ogni elemento presente nel ciclo for con le sue condizioni
    listNumbersAndString.innerHTML = multipleNumber;
    listNumbersAndString.classList.add('box');
    divContainer.append(listNumbersAndString);

    if (i % 3 === 0 && i % 5 === 0) {
        listNumbersAndString.classList.add('box-three-five')
        console.log(listNumbersAndString);
    }

};



//BONUS 1:
// Crea un container nel DOM, 
// aggiungendo un elemento html con il numero o la stringa corretta da mostrare.


// BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
// Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
