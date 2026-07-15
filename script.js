let sayfa = 0;

function devamEt() {

    sayfa++;

    if (sayfa == 1) {

        document.getElementById("baslik").innerHTML = "hoşgldn...";

        document.getElementById("kopek").style.display = "block";

        document.getElementById("butonlar").innerHTML = `
            <button onclick="devamEt()">hoş buldum</button>
        `;

    }

    else if (sayfa == 2) {

        document.getElementById("kopek").style.display = "none";

        document.getElementById("baslik").innerHTML = "nslsnnnn?";

        document.getElementById("butonlar").innerHTML = `
            <button onclick="superr()">super</button>
            <button onclick="kotu()">kotu</button>
        `;

    }

}

function superr() {

    document.getElementById("baslik").innerHTML = "niye?????";

    document.getElementById("butonlar").innerHTML = `
        <button onclick="tmmSus()">sen olmadan gecen gunlerim cok huzurlu</button>
        <button onclick="tmmSus()">iyiyim iste mal</button>
    `;

}

function kotu() {

    document.getElementById("baslik").innerHTML = "niye??????";

    document.getElementById("butonlar").innerHTML = `
        <button onclick="tmmSus()">sni ck ozledm</button>
        <button onclick="tmmSus()">senle ilgisi yok mal herseyi ustune alinma</button>
    `;

}

function tmmSus() {

    document.getElementById("baslik").innerHTML = "of tmm sus";

    document.getElementById("butonlar").innerHTML = `
        <button onclick="baris()">tm.</button>
        <button onclick="baris()">tmm mommy</button>
    `;

}

/* -------------------- */
/* BARIŞMA KISMI */
/* -------------------- */

function baris() {

    document.getElementById("baslik").innerHTML = "barışak mı";

    document.getElementById("butonlar").innerHTML = `
        <button onclick="evet1()">evet</button>
        <button onclick="hayir()">hayır</button>
    `;

}

function evet1() {

    document.getElementById("baslik").innerHTML = "emin misin";

    document.getElementById("butonlar").innerHTML = `
        <button onclick="sonSoru()">evt</button>
        <button onclick="dusunme()">düşünmem lazım</button>
    `;

}

function sonSoru() {

    document.getElementById("baslik").innerHTML = "son kez soruyorum";

    document.getElementById("butonlar").innerHTML = `
        <button onclick="final()">evt</button>
        <button onclick="dusunme()">düşünmem lazım</button>
    `;

}function hayir() {

    surpriz("HAYIR MI??!!");

}

function dusunme() {

    surpriz("DÜŞÜNMEN Mİ LAZIM??!!");

}

function surpriz(yazi) {

    document.getElementById("surprizEkran").style.display = "flex";

    document.getElementById("surprizYazi").innerHTML = yazi;

    document.getElementById("surprizButon").innerHTML = "";

    let ses = document.getElementById("ses");

    ses.currentTime = 0;
    ses.play();

    setTimeout(function () {

        document.getElementById("surprizButon").innerHTML = `
            <button onclick="final()">pardon cnm barısalım</button>
        `;

    }, 3000);

}

function final() {

    document.getElementById("surprizEkran").style.display = "none";

    document.getElementById("baslik").innerHTML = "barışacağımızı biliyodum cnmmm 💗";

    document.getElementById("butonlar").innerHTML = "";

    document.getElementById("kopek").style.display = "none";

    document.getElementById("finalGifler").style.display = "block";

}