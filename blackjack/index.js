let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")
let startBtn = document.getElementById("start-btn")

let hasBlackjack = false
let isAlive = false
let cardsArray = []
let sum = 0

let player = {
    name: "Ivan",
    chips: 250
}

playerEl.textContent = `${player.name}: $${player.chips}`

function renderCard() {
    let newCard = Math.floor(Math.random() * 13) + 1
    if (newCard > 10) {
        newCard = 10
    } else if (newCard === 1) {
        newCard = 11
    }
    return newCard
}

function startNewGame() {
    cardsArray = []
    sum = 0
    messageEl.textContent = ""
    cardsEl.textContent = "Cards:" 
    isAlive = true
    hasBlackjack = false
    newCard()
    newCard()
}

function newCard() {
    if (isAlive && !hasBlackjack) {
        let newCard = renderCard()
        cardsArray.push(newCard)
        sum += newCard
        cardsEl.textContent += ` ${newCard}`
        sumEl.textContent = `Sum: ${sum}`
        checkGame()
    } 
}

function checkGame() {
    if (sum === 21) {
        messageEl.textContent = "You got a Blackjack!"
        startBtn.textContent = "RESTART"
        hasBlackjack = true
    } else if (sum > 21) {
        messageEl.textContent = "You have lost."
        startBtn.textContent = "RESTART"
        isAlive = false
    } else {
        messageEl.textContent = "Do you want to draw a new card?"
    }
}