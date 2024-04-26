let randomNumber = Math.round(Math.random() * 10)
const frase = document.querySelector('#frase')
const butAgain = document.querySelector("#butAgain")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const img = document.querySelector("#img1")
const frases = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Agradeço todos os dias pela minha vida, por tudo o que conquistei até aqui. E tenho fé de que o futuro me reserva realizações ainda maiores! ",
    "Lembre-se do seu passado com carinho. Afinal, é por causa dele que você está aqui hoje!",
    "Com o coração cheio de gratidão, sei que sou capaz de superar qualquer obstáculo que a vida apresentar!",
    "A coragem está um passo à frente do medo.",
    "Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.",
    "Comece fazendo o que é necessário, depois o que é possível, e de repente você estará fazendo o impossível.",
    "A força não provém da capacidade física. Provém de uma vontade indomável.",
    "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você",
    "A vida se contrai e se expande proporcionalmente à coragem do indivíduo.",
    "Ganhamos força, coragem e confiança a cada experiência em que verdadeiramente paramos para enfrentar o medo",
]

butAgain.addEventListener('click', handleAgainClick)

function handleAgainClick(event) {
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    randomNumber = Math.round(Math.random() * 10)

}


img.addEventListener('click', handleImgClick)


function handleImgClick(event) {
    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    frase.innerText = frases[randomNumber]
}


