const getNewDeckBtn = document.getElementById("new-deck-btn")

getNewDeckBtn.addEventListener("click", fetchNewDeck)

function fetchNewDeck() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
    })
}