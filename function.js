

//----------------------------FUNZIONI ANONIME

//diamo un nome parlante alla funzione per riconoscerla

function saluta(){

    console.log("ciao classe");

}


function salutaAlert(){
    
    alert("ciao") 

}

//la funzione va richiamata per poterla utilizzare

saluta();
//salutaAlert();
saluta();

//salutaAlert ferma il flusso(a cascata) che poi riparte dopo averlo chiuso

//----------------------------FUNZIONI CON PARAMETRI O ARGOMENTI

function somma(x,y){

    return x + y;

}

function sottrazione(x,y){

    return x - y;

}

function potenza(x){

    return x **2;
    //return x * x;
}

let risultato = somma(4,5);
let risultatoSottrazione = sottrazione(8,3);
let risultatoPotenza = potenza(5)

console.log(risultato);
console.log(risultatoSottrazione);
console.log(risultatoPotenza);

//chiedi tramite prompt l'età dell'utente e tramite funzione 
// verifica se è maggiorenne

let eta = parseInt(prompt("inserisci la tua età")); //casting -> tipizzare il num

//trasformo in Number
let etaIns = Number(eta); 

//funzione che verifica se >18

function verificaEta(x){

    if(x >=18){

        return "sei maggiorenne"

    }else{
        return "sei minorenne"
    }

}

let mex = verificaEta(etaIns);
alert(mex);

//per capire che tipo di dato ho

console.log(typeof etaIns)








