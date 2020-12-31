const cards = document.querySelectorAll(".card");
let hasFippedCard = false;
let fistCard, secondCard;

let lockboard = false;

let points = 0;

function flipCard()
{
    if(this === fistCard)
    {
        return;
    }
    else if(lockboard)
    {
        return;
    }
    else
    {
        this.classList.add("flip");

    if(!hasFippedCard)
    {
        hasFippedCard = true;
        fistCard = this;
        return;
    }
    else
    {
        secondCard = this;
    }
    hasFippedCard = false;
    checkForMath();
    }
}

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
});

function checkForMath()
{
    if(fistCard.dataset.card === secondCard.dataset.card)
    {
        disableCards();
        return;
    }
    else
    {
        unflipCards();
    }
}

function disableCards()
{
    fistCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    points += 1;
    if (points >= 6) {
        setTimeout(() => {
            newGame();
        }, 4000);
    }

    resetBoard();
}

function unflipCards()
{
    lockboard = true;
    setTimeout(() => {
        fistCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1000);
}

function resetBoard()
{
    [hasFippedCard, lockboard, fistCard, secondCard] = [false, false, null, null];
}

//Immediately invoked function
(function shuffle()
{
    cards.forEach((card) => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

function newGame()
{
    window.location = window.location.href+'?eraseCache=true';
    window.location.reload();
}
