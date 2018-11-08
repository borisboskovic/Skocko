var zadatiZnakovi = [];
var rijeseno = false;

//Random odabir zadanih znakova
for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 6);
    console.log(random);
    zadatiZnakovi[i] = znakoviTastera[random];
}


document.getElementsByClassName("potvrda")[0].addEventListener("click", provjera);


function provjera() {
    if (rijeseno) {
        return;
    }
    var podudaranja = prebrojavanje();
    var indikatori = redovi[aktivniRed].children[1].children;
    for (var i = 0; i < podudaranja[0]; i++) {
        indikatori[i].style.backgroundColor = "red";
    }
    for (var j = podudaranja[0]; j < podudaranja[0] + podudaranja[1]; j++) {
        indikatori[j].style.backgroundColor = "yellow";
    }
    aktivniRed++;
    if (podudaranja[0] == 4) {
        rijeseno = true;
    }
    popunjenost = [false, false, false, false]
}


//Vraca niz od dva elementa gdje je [0] broj potpunih podudaranja a [1] broj djelimicnih podudaranja
function prebrojavanje() {
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
    var djelimicnaPodudaranje = brojPodudaranja - potpunaPodudaranja;

    return [potpunaPodudaranja, djelimicnaPodudaranje];
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
    for (var i = 0; i < 4; i++) {
        if (nizUnesenih[i] === zadatiZnakovi[i]) {
            brojPodudaranja++;
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