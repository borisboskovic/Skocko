var redovi = document.getElementsByClassName("jedan-red");
var tasteri = document.getElementsByClassName("jedan-taster");
var znakoviTastera = [
    'url("./assets/img/sova.png")',
    'url("./assets/img/tref.png")',
    'url("./assets/img/pik.png")',
    'url("./assets/img/herc.png")',
    'url("./assets/img/karo.png")',
    'url("./assets/img/zvijezda.png")',
];


var popunjenost = [false, false, false, false];
var aktivniRed = 0;


//Deklaracija i popunjavanje dvodiemnzionalnog niza polja za unos
var polja = [];
for (var i = 0; i < 7; i++) {
    polja[i] = [];
}
var temp = document.getElementsByClassName("jedno-polje");
for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 4; j++) {
        polja[i][j] = temp[i * 4 + j];
    }
}


//Dodavanje event listenera na tastere
for (var i = 0; i < tasteri.length; i++) {
    tasteri[i].addEventListener("click", klikNaTaster);
}


//Dodavanje event listenera na polja
for (var i = 0; i < polja.length; i++) {
    for (var j = 0; j < polja[i].length; j++) {
        polja[i][j].addEventListener("click", klikNaPolje);
    }
}


//Metoda koja se aktivira na dogadjaj kilka na jedan od tastera
function klikNaTaster(e) {
    var trenutnoPolje = polja[aktivniRed][indeksAktivnogPolja()];
    if (indeksAktivnogPolja() != -1) {
        var indeksTastera = dohvatiIndeksTastera(e);
        var indeksPolja = indeksAktivnogPolja();
        polja[aktivniRed][indeksPolja].style.backgroundImage = znakoviTastera[indeksTastera];
        popunjenost[indeksPolja] = true;

    }
}

//Metoda koja se aktivira na dogadjaj kilka na jedno od polja
function klikNaPolje(e) {
    var indeksPolja = dohvatiIndeksPolja(e);
    if(popunjenost[indeksPolja]==true){
        popunjenost[indeksPolja]=false;
        polja[aktivniRed][indeksPolja].style.backgroundImage="";
    }
}


//Vraca indeks aktivnog polja u aktivnom redu ili -1 ukoliko ne postoji aktivno polje
function indeksAktivnogPolja() {
    var indeks = -1;
    for (var i = 0; i < popunjenost.length; i++) {
        if (popunjenost[i] == false) {
            indeks = i;
            break;
        }
    }
    return indeks;
}

//Vraca indeks tastera na koga se desio dogadjaj klik
function dohvatiIndeksTastera(e) {
    var indeks = -1;
    var izvor = e.srcElement;
    for (var i = 0; i < tasteri.length; i++) {
        if (tasteri[i] == izvor) {
            indeks = i;
        }
    }
    return indeks;
}


//Vraca indeks polja na koga se desio dogadjaj klik
function dohvatiIndeksPolja(e) {
    var indeks;
    var izvor = e.srcElement;
    for (var i = 0; i < 4; i++) {
        if (polja[aktivniRed][i] == izvor) {
            indeks = i;
        }
    }
    return indeks;
}