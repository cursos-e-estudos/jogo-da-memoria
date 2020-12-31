const cards = document.querySelectorAll(".card");
let hasFippedCard = false;
let fistCard, secondCard;

let lockboard = false;

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