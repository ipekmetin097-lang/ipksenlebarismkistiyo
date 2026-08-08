let sayfa = 0;
let hayirSayisi = 0;
/* -------------------- */
/* KALPLER */
/* -------------------- */
function kalpOlustur() {
    const kalpler =
        document.getElementById("kalpler");
    if (!kalpler) return;
    const kalp =
        document.createElement("div");
    kalp.className = "kalp";
    const kalpTipleri = [
        "💗",
        "💕",
        "💖",
        "💘",
        "💓"
    ];
    kalp.innerHTML =
        kalpTipleri[
            Math.floor(
                Math.random() * kalpTipleri.length
            )
        ];
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
    if (sayfa === 1) {
        document.getElementById("baslik").innerHTML =
            "hoşgeldin...";
        document.getElementById("kopek").style.display =
            "block";
        document.getElementById("butonlar").innerHTML = `
            <button onclick="devamEt()">
                hoş buldum
            </button>
        `;
    }
    else if (sayfa === 2) {
        document.getElementById("kopek").style.display =
            "none";
        document.getElementById("baslik").innerHTML =
            "nslsnnnn?";
        document.getElementById("butonlar").innerHTML = `
            <button onclick="superr()">
                super
            </button>
            <button onclick="kotu()">
                kotu
            </button>
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
        <button onclick="tmmSus()">
            sen olmadan gecen günlerim cok huzurlu
        </button>
        <button onclick="tmmSus()">
            iyiyim iste mal
        </button>
    `;
}
function kotu() {
    document.getElementById("baslik").innerHTML =
        "niye??????";
    document.getElementById("butonlar").innerHTML = `
        <button onclick="tmmSus()">
            sni ck ozledm
        </button>
        <button onclick="tmmSus()">
            senle ilgisi yok mal her seui ustune alınma
        </button>
    `;
}
function tmmSus() {
    document.getElementById("baslik").innerHTML =
        "of tmm sus";
    document.getElementById("butonlar").innerHTML = `
        <button onclick="baris()">
            tm.
        </button>
        <button onclick="baris()">
            tmm mommy
        </button>
    `;
}
/* -------------------- */
/* BARIŞMA */
/* -------------------- */
function baris() {
    document.getElementById("baslik").innerHTML =
        "barisak mı";
    document.getElementById("butonlar").innerHTML = `
        <button onclick="evet1()">
            evet
        </button>
        <button onclick="hayir()">
            hayır
        </button>
    `;
}
function evet1() {
    document.getElementById("baslik").innerHTML =
        "emin misin";
    document.getElementById("butonlar").innerHTML = `
        <button onclick="sonSoru()">
            evt
        </button>
        <button onclick="dusunme()">
            dusunmem lazım
        </button>
    `;
}
function sonSoru() {
    document.getElementById("baslik").innerHTML =
        "son kez soruyorum";
    document.getElementById("butonlar").innerHTML = `
        <button onclick="finalSecim()">
            evt
        </button>
        <button onclick="dusunme()">
            dusunmem lazım
        </button>
    `;
}
/* -------------------- */
/* HAYIR */
/* -------------------- */
function hayir() {
    surpriz("HAYIR MI??!!");
}
function dusunme() {
    surpriz("DUSUNMEN Mİ LAZIM??!!");
}
/* -------------------- */
/* JUMPSCARE */
/* -------------------- */
function surpriz(yazi) {
    document.getElementById("baslik").innerHTML =
        yazi;
    const jumpscare =
        document.getElementById("jumpscare");
    const audio =
        document.getElementById("jumpscareAudio");
    jumpscare.style.display =
        "flex";
    audio.currentTime = 0;
    audio.play().catch(function () {
        console.log(
            "Tarayıcı ses oynatmayı engelledi."
        );
    });
}
/* -------------------- */
/* JUMPSCARE KAPAT */
/* -------------------- */
function jumpscareKapat() {
    const jumpscare =
        document.getElementById("jumpscare");
    const audio =
        document.getElementById("jumpscareAudio");
    jumpscare.style.display =
        "none";
    audio.pause();
    audio.currentTime = 0;
    document.getElementById("baslik").innerHTML =
        "barışak mı";
    document.getElementById("butonlar").innerHTML = `
        <button onclick="evet1()">
            evet
        </button>
        <button onclick="hayir()">
            hayır
        </button>
    `;
}
/* -------------------- */
/* FİNAL SEÇİM */
/* -------------------- */
function finalSecim() {
    document.getElementById("baslik").innerHTML =
        "barıştık dimi";
    document.getElementById("butonlar").innerHTML = `
        <button onclick="sevgiSayfasi()">
            seni cok seviyorum 💗
        </button>
        <button onclick="zorlaSayfasi()">
            zorla baristik mal
        </button>
    `;
}
/* -------------------- */
/* SEVGİ SAYFASI */
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
    const evet =
        document.getElementById("evetButonu");
    evet.style.position = "";
    evet.style.inset = "";
    evet.style.width = "";
    evet.style.height = "";
    evet.style.margin = "";
    evet.style.borderRadius = "";
    evet.style.fontSize = "";
    evet.style.transform = "scale(1)";
    evet.innerHTML =
        "evet";
}
function hayirBuyut() {
    hayirSayisi++;
    const evet =
        document.getElementById("evetButonu");
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