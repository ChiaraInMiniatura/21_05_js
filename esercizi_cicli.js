//Viene chiesto all utente 5 volte un numero
//questo numero dovrà essere raddoppiato 
//stampare i valori raddoppiati


//Svolgimento

//prendo il dato 5 volte tramite 
//prompt ( che dato è? numero? string? parseQualcosa, trim, tolower )


//dichiaro un array vuoto per salvare l dato inserito
//dichiaro un altro array per salvare quelli raddoppiati

//raddoppio il valore

//pusho il valore raddoppiato nell array dei num doppi

//console log valori doppi(array_doppi)


// BONUS : nel prompt voglio avere
    //         un messaggio che cambia dopo ogni numero inserito.
    //         es.: Inserisci il PRIMO numero di 5
    //              Inserisci il SECONDO numero di 5..


let num = [];
let mex = ["primo", "secondo", "terzo", "quarto", "quinto"];


for(let i = 0 ; i < mex.length; i++){

    let numRichiesto = parseInt(prompt(" metti il " + mex[i] + " numero" ));

    num.push(numRichiesto * 2);
5
}

alert("i tuoi numeri raddoppiati sono: " + num);

