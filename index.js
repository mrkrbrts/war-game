import {changeGradient} from "./background.js";

const cardsDiv = document.getElementById("cards-wrapper")

//assign variable, leave it undefined for fetch request
let deckId

// BUTTONS
const getNewDeckBtn = document.getElementById("new-deck-btn")
const drawCardsBtn = document.getElementById("draw-cards-btn")


getNewDeckBtn.addEventListener("click", getNewDeck)
drawCardsBtn.addEventListener("click", drawCards)

function getNewDeck() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
            console.log(deckId)
    })

    if (drawCardsBtn.classList.contains("inactive")) {
        drawCardsBtn.classList.remove("inactive")
    } else {
        deleteCards()
    }


}

function drawCards() {
    if (!drawCardsBtn.classList.contains("inactive"))
    {
        if (deckId) {
            fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
                .then(res => res.json())
                .then (data => {
                    let cardUrlArray = data.cards
                    displayCards(cardUrlArray)
                    changeGradient()
                })
    
        } else {
            console.log("No deck found")
        }
    }

}

function displayCards(array) {
    document.getElementById("card-slot-1").innerHTML = `<img src="${array[0].image}" alt="${array[0].value} of ${array[0].suit}">`
    document.getElementById("card-slot-2").innerHTML = `<img src="${array[1].image}" alt="${array[1].value} of ${array[1].suit}">`

    // for (let i=0; i < array.length; i++) {
        
    //     cardsDiv.innerHTML += `<img src="${array[i].image}" alt="${array[i].value} of ${array[i].suit}">`
    //     console.log(`${array[i].value} of ${array[i].suit}`)
    // }
}

function deleteCards() {
    cardsDiv.innerHTML = null
}
// random background gradient upon loading page
changeGradient()

