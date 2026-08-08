let sayfa = 0;
let hayirSayisi = 0;
/* -------------------- */
/* KALP SİSTEMİ */
/* -------------------- */
function kalpOlustur() {
    const kalpler = document.getElementById("kalpler");
    const kalp = document.createElement("div");
    kalp.className = "kalp";
    const kalpTipleri = ["💗", "💕", "💖", "💘", "💓"];
    kalp.innerHTML =
        kalpTipleri[Math.floor(Math.random() * kalpTipleri.length)];
    kalp.style.left =
        Math.random() * 100 + "%";
    kalp.style.fontSize =
        (15 + Math.random() * 25) + "px";
    const sure =
        5 + Math.random() * 5;
    kalp.style.animationDuration =
        sure + "s";
    kalpler.appendChild(kalp);
    setTimeout(function () {
        kalp.remove();
    }, sure * 1000);
}
setInterval(kalpOlustur, 500);
/* -------------------- */
/* BAŞLANGIÇ */
/* -------------------- */
function devamEt() {
    sayfa++;
    if (sayfa == 1) {
        document.getElementById("baslik").innerHTML =
            "hoşgldn...";
        document.getElementById("kopek").style.display =
            "block";
        document.getElementById("butonlar").innerHTML = `
            <button onclick="devamEt()">hoş buldum</button>
        `;
    }
    else if (sayfa == 2) {
        document.getElementById("kopek").style.display =
            "none";
        document.getElementById("baslik").innerHTML =
            "nslsnnnn?";
        document.getElementById("butonlar").innerHTML = `
            <button onclick="superr()">super</button>
            <button onclick="kotu()">kotu</button>
        `;
    }
}
/* -------------------- */
/* NASILSIN */
/* -------------------- */
function superr() {
    document.getElementById("baslik").innerHTML =
        "niye?????";
    document.getElementById("butonlar").innerHTML = `
        <button onclick="tmmSus()">sen olmadan gecen günlerim cok huzurlu</button>
        <button onclick="tmmSus()">iyiyim iste mal</button>
    `;
}
function kotu() {
    document.getElementById("baslik").innerHTML =
        "niye??????";
    document.getElementById("butonlar").innerHTML = `
        <button onclick="tmmSus()">sni ck ozledm</button>
        <button onclick="tmmSus()">senle ilgisi yok mal herseyi ustune alinma</button>
    `;
}
function tmmSus() {
    document.getElementById("baslik").innerHTML =
        "of tmm sus";
    document.getElementById("butonlar").innerHTML = `
        <button onclick="baris()">tm.</button>
        <button onclick="baris()">tmm mommy</button>
    `;
}
/* -------------------- */
/* BARIŞMA */
/* -------------------- */
function baris() {
    document.getElementById("baslik").innerHTML =
        "barisak mı";
    document.getElementById("butonlar").innerHTML = `
        <button onclick="evet1()">evet</button>
        <button onclick="hayir()">hayır</button>
    `;
}
function evet1() {
    document.getElementById("baslik").innerHTML =
        "emin misin";
    document.getElementById("butonlar").innerHTML = `
        <button onclick="sonSoru()">evt</button>
        <button onclick="dusunme()">düşünmem lazım</button>
    `;
}
function sonSoru() {
    document.getElementById("baslik").innerHTML =
        "son kez soruyorum";
    document.getElementById("butonlar").innerHTML = `
        <button onclick="finalSecim()">evt</button>
        <button onclick="dusunme()">düşünmem lazım</button>
    `;
}
/* -------------------- */
/* HAYIR / DÜŞÜNME */
/* -------------------- */
function hayir() {
    surpriz();
}
function dusunme() {
    surpriz();
}
/* -------------------- */
/* JUMPSCARE */
/* -------------------- */
function surpriz() {
    const kutu =
        document.querySelector(".kutu");
    const jumpscare =
        document.getElementById("jumpscare");
    const audio =
        document.getElementById("jumpscareAudio");
    const buton =
        document.getElementById("jumpscareButon");
    /* Ana sayfadaki bütün yazıları gizle */
    kutu.style.display =
        "none";
    /* Jumpscare'i aç */
    jumpscare.style.display =
        "flex";
    /* Buton hemen görünmesin */
    buton.style.display =
        "none";
    /* GIF'i baştan başlat */
    const gif =
        document.getElementById("jumpscareGif");
    gif.src = "";
    gif.offsetHeight;
    gif.src = "jumpscare.gif";
    /* MP3'ü baştan başlat */
    audio.currentTime = 0;
    audio.play().catch(function () {
        console.log(
            "Tarayıcı ses oynatmayı engelledi."
        );
    });
    /* 3 saniye sonra buton */
    setTimeout(function () {
        if (
            jumpscare.style.display === "flex"
        ) {
            buton.style.display =
                "block";
        }
    }, 3000);
}
/* -------------------- */
/* JUMPSCARE KAPAT */
/* -------------------- */
function jumpscareKapat() {
    const kutu =
        document.querySelector(".kutu");
    const jumpscare =
        document.getElementById("jumpscare");
    const audio =
        document.getElementById("jumpscareAudio");
    const buton =
        document.getElementById("jumpscareButon");
    /* Jumpscare kapat */
    jumpscare.style.display =
        "none";
    buton.style.display =
        "none";
    /* Sesi durdur */
    audio.pause();
    audio.currentTime = 0;
    /* Ana sayfayı geri getir */
    kutu.style.display =
        "block";
    document.getElementById("baslik").innerHTML =
        "barışak mı";
    document.getElementById("butonlar").innerHTML = `
        <button onclick="evet1()">evet</button>
        <button onclick="hayir()">hayır</button>
    `;
}
/* -------------------- */
/* ANA SEÇİM */
/* -------------------- */
function finalSecim() {
    document.getElementById("baslik").innerHTML =
        "baristik dimi";
    document.getElementById("butonlar").innerHTML = `
        <button onclick="sevgiSayfasi()">seni cok seviyorum 💗</button>
        <button onclick="zorlaSayfasi()">zorla barıştık mal</button>
    `;
}
/* -------------------- */
/* SENİ ÇOK SEVİYORUM */
/* -------------------- */
function sevgiSayfasi() {
    document.getElementById("sevgiSayfasi").style.display =
        "flex";
}
function okumuyorum() {
    document.getElementById("sevgiSayfasi").style.display =
        "none";
    document.getElementById("okumuyorumSayfasi").style.display =
        "flex";
}
/* -------------------- */
/* ZORLA BARIŞTIK */
/* -------------------- */
function zorlaSayfasi() {
    document.getElementById("zorlaSayfasi").style.display =
        "flex";
    hayirSayisi = 0;
    document.getElementById("evetButonu").style.transform =
        "scale(1)";
}
function hayirBuyut() {
    hayirSayisi++;
    const evet =
        document.getElementById("evetButonu");
    /*
    Her hayırda evet butonu büyüyor.
    5. hayırda ekranı kaplıyor.
    */
    if (hayirSayisi < 5) {
        const buyume =
            1 + (hayirSayisi * 0.8);
        evet.style.transform =
            `scale(${buyume})`;
    }
    else {
        evet.style.position =
            "fixed";
        evet.style.inset =
            "0";
        evet.style.width =
            "100vw";
        evet.style.height =
            "100vh";
        evet.style.margin =
            "0";
        evet.style.borderRadius =
            "0";
        evet.style.fontSize =
            "clamp(40px, 10vw, 100px)";
        evet.innerHTML =
            "EVET 💗";
    }
}
function zorlaEvet() {
    document.getElementById("zorlaSayfasi").style.display =
        "none";
    sevgiSayfasi();
}
/* -------------------- */
/* FİNAL */
/* -------------------- */
function final() {
    document.getElementById("sevgiSayfasi").style.display =
        "none";
    document.getElementById("okumuyorumSayfasi").style.display =
        "none";
    document.getElementById("zorlaSayfasi").style.display =
        "none";
    document.getElementById("baslik").innerHTML =
        "seni cok seviyorum cnmmm 💗";
    document.getElementById("butonlar").innerHTML =
        "";
    document.getElementById("kopek").style.display =
        "none";
    document.getElementById("finalGifler").style.display =
        "block";
}