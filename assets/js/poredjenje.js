var zadatiZnakovi = [];

//Random odabir zadanih znakova
for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 6);
    console.log(random);
    zadatiZnakovi[i] = znakoviTastera[random];
}


document.getElementsByClassName("potvrda")[0].addEventListener("click", provjera);

function provjera() {
    for (var i = 0; i < popunjenost.length; i++) {
        if (popunjenost[i] == false) {
            return;
        }
    }
    var uneseniZnakovi = [];
    for (var j = 0; j < polja[aktivniRed].length; j++) {
        uneseniZnakovi[j] = polja[aktivniRed][j].style.backgroundImage;
    }

    var brojPodudaranja = prebrojSvaPodudaranja(uneseniZnakovi);
    var potpunaPodudaranja = prebrojPotpunaPodudaranja(uneseniZnakovi);

    console.log(brojPodudaranja);
    console.log(potpunaPodudaranja);


}

function prebrojSvaPodudaranja(nizUnesenih) {
    var brojPodudaranja = 0;
    var zadani = prebrojZnakove(zadatiZnakovi);
    var uneseni = prebrojZnakove(nizUnesenih);
    for (var i = 0; i < 6; i++) {
        brojPodudaranja += ((uneseni[i] > zadani[i]) ? zadani[i] : uneseni[i]);
    }
    return brojPodudaranja;
}

function prebrojPotpunaPodudaranja(nizUnesenih) {
    var brojPodudaranja = 0;
    var zadani = prebrojZnakove(zadatiZnakovi);
    var uneseni = prebrojZnakove(nizUnesenih);
    for (var k = 0; k < 4; k++) {
        if (uneseni[k] == zadani[k]) {
            brojPodudaranja+=uneseni[k];
        }
    }
    return brojPodudaranja;
}

function prebrojZnakove(niz) {
    var brojSova = 0;
    var brojTref = 0;
    var brojPik = 0;
    var brojHerc = 0;
    var brojKaro = 0;
    var brojZvijezda = 0;

    for (var i = 0; i < 4; i++) {
        switch (niz[i]) {
            case znakoviTastera[0]:
                brojSova++;
                break;
            case znakoviTastera[1]:
                brojTref++;
                break;
            case znakoviTastera[2]:
                brojPik++;
                break;
            case znakoviTastera[3]:
                brojHerc++;
                break;
            case znakoviTastera[4]:
                brojKaro++;
                break;
            case znakoviTastera[5]:
                brojZvijezda++;
                break;
        }
    }

    return [brojSova, brojTref, brojPik, brojHerc, brojKaro, brojZvijezda];
}