//creare una funzione che calcola il prezzo di un prodotto
//
//- chiedi all utente il prezzo del prodotto e la % di sconto
// i prezzi sono decimali -> toFixed(2)

function przProdotto(x,y){

    return x = x - (x / 100 * y);
}

przInsProdotto = parseFloat(prompt("inserisci il prezzo del prodotto:"));
przInsSconto = parseFloat(prompt("inserisci lo sconto che vuoi inserire:"));

przInsSc = Number (przInsSconto); //per levare se utenti mettono %
//console.log(przInsSc); 

prezzoFinale = przProdotto(przInsProdotto,przInsSc);
alert("il prezzo finale è: " + prezzoFinale.toFixed(2) + "€");
