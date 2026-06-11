const iniciar = document.getElementById("iniciar");

const arvores = document.getElementById("arvores");
const agua = document.getElementById("agua");
const especies = document.getElementById("especies");

const mensagem = document.getElementById("mensagem");

const modoEscuro = document.getElementById("modoEscuro");

let totalArvores = 0;
let totalAgua = 0;
let totalEspecies = 0;

iniciar.addEventListener("click", () => {

    animarContador(arvores, 50000);
    animarContador(agua, 250000);
    animarContador(especies, 120);

});

document.querySelectorAll(".acao").forEach(card => {

    card.addEventListener("click", () => {

        const valor = card.dataset.valor;

        if(valor == 1){

            mensagem.textContent =
            "Milhares de árvores foram recuperadas e novos corredores ecológicos surgiram.";

        }

        if(valor == 2){

            mensagem.textContent =
            "A tecnologia reduziu desperdícios e preservou milhões de litros de água.";

        }

        if(valor == 3){

            mensagem.textContent =
            "Abelhas e outros polinizadores voltaram a prosperar.";

        }

        if(valor == 4){

            mensagem.textContent =
            "A agricultura inteligente aumentou a produção sem ampliar áreas de cultivo.";

        }

    });

});

modoEscuro.addEventListener("click", () => {

    document.body.classList.toggle("claro");

});

function animarContador(elemento, destino){

    let atual = 0;

    const intervalo = setInterval(() => {

        atual += Math.ceil(destino / 100);

        if(atual >= destino){

            atual = destino;
            clearInterval(intervalo);
        }

        elemento.textContent =
        atual.toLocaleString('pt-BR');

    },20);

}



