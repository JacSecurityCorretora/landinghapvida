/* ===== ROLAGEM SUAVE ===== */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (evento) {
        evento.preventDefault();

        const alvo = document.querySelector(this.getAttribute("href"));

        if (alvo) {
            alvo.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* ===== CARROSEL ===== */

const slides = document.getElementById("slides");

if(slides){

    const imgs = slides.querySelectorAll("img");
    const dotsContainer = document.getElementById("dots");

    let index = 0;

    imgs.forEach((_,i)=>{
        const dot=document.createElement("span");
        dot.className="dot";
        dot.onclick=()=>{
            index=i;
            updateSlider();
        };
        dotsContainer.appendChild(dot);
    });

    const dots=document.querySelectorAll(".dot");

    function updateSlider(){
        slides.style.transform=`translateX(-${index*100}%)`;

        dots.forEach(dot=>dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    document.querySelector(".next").onclick=()=>{
        index=(index+1)%imgs.length;
        updateSlider();
    };

    document.querySelector(".prev").onclick=()=>{
        index=(index-1+imgs.length)%imgs.length;
        updateSlider();
    };

    setInterval(()=>{
        index=(index+1)%imgs.length;
        updateSlider();
    },4000);

    updateSlider();
}


/* ===== FORMULÁRIO ===== */

const form = document.getElementById("quote-form");

if (form) {
    form.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nome = form.elements["nome"].value.trim();
        const telefone = form.elements["telefone"].value.trim();
        const plan = form.elements["plan"].value;

        const numeroWhatsApp = "5511940762727";

        const texto = [
            "Olá! Vim pelo site da Saúde Fácil e gostaria de fazer uma cotação.",
            "",
            `Nome: ${nome}`,
            `WhatsApp: ${telefone}`,
            `Plano: ${plan}`
        ].join("\n");

        const linkWhatsApp =
            "https://wa.me/" +
            numeroWhatsApp +
            "?text=" +
            encodeURIComponent(texto);

        window.open(linkWhatsApp, "_blank");

        form.reset();
    });
}

function selecionarPlan(plan) {
    document.getElementById("plan").value = plan;

    document.getElementById("quote-form").scrollIntoView({
        behavior: "smooth"
    });
}