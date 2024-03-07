// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero 
// per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// Creiamo un ciclo che ci permetta di stampare in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

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
    console.log(multipleNumber);
};


