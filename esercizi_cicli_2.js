//Esercizio 2

//Abbiamo un sistema che dispone di una lista di codici di accesso

// let codici = [101, 202, 303, 404];

//Problema :  l utente deve inserire un codice per accedere al sistema.

    //  il programma deve verficare : SE il codice è valido E SE questo codice rientra in un certo intervallo.
   
    // Richieste : verifica se il codice è presente nell array 
    //             e contemporaneamente SE MAGGIORE O UGUALE A 100 E MINORE O UGUALE A 400

    //Se entrambe le condizioni sono vere, > stampa "Accesso Consentito"
    //Se il codice è nell array MA è fuori dall intervallo, > stmpa "Codice valido ma fuori dal range"
    //Se il codice non è presente > "Accesso Negato"






    //svolgimento

    /*
    let codici
    prompt codice inserito 

    verificare se codice è includes in codici

    verificare se è maggiore o uguale a 100 e minore uguale a 400(direttamente nell'if?)

    if tutte e 2 alert Accesso Consentito 
    else if solo includes alert Codice valido ma fuori dal range"
    else alert Accesso Negato"

    */

    let codici = [101, 202, 303, 404];
    
    let numIns = parseInt(prompt(" metti il tuo codice di accesso" ));

    //console.log(numIns);

    if(codici.includes(numIns) && numIns >=100 && numIns <= 400){

        alert("Accesso Consentito")

    }else if (codici.includes(numIns) && (numIns <=100 || numIns >=400) ){

        alert("codice corretto ma fuori range")

    }else{

        alert("Accesso Negato")

    }

