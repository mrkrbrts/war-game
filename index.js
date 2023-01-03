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
}

function drawCards() {
    if (deckId) {
        fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
            .then(res => res.json())
            .then (data => {
                console.log(data.cards)
            })

    } else {
        console.log("No deck found")
    }
}