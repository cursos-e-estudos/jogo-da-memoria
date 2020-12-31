const cards = document.querySelectorAll(".card");
let hasFippedCard = false;
let fistCard, secondCard;

function flipCard()
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

}

function unflipCards()
{

}