const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".timeb"),
flipsTag = document.querySelector(".flipb"),
refreshBTN = document.querySelector(".details button"),
playBTN = document.querySelector("#play"),
alert = document.querySelector(".modal-alert"),
menu = document.querySelector("#menu"),
modeMenu = document.querySelector(".mode"),
social = document.querySelector(".social"),
dice = document.querySelector(".dice")


let maxTime = 20
let timeLeft = maxTime
let flips = 0
let matchedCards = 0
let disableDeck = false
let isPlaying = false
let cardOne , cardTwo , timer




function initTimer() {
    if(timeLeft <= 0){
        return clearInterval(timer)
    }
    timeLeft--
    timeTag.innerText = timeLeft
}












function flipCard({target: clickedCard}) {
    if(!isPlaying){
        isPlaying = true 
        timer = setInterval(initTimer, 1000)
    }
    if(clickedCard !== cardOne && !disableDeck && timeLeft > 0){
        flips++
        flipsTag.innerText = flips
        clickedCard.classList.add("flip")
        if(!cardOne){
            return cardOne = clickedCard
        }
        newarr.push(flips)
        cardTwo = clickedCard
        disableDeck = true
        let cardOneIcon = cardOne.querySelector(".back-view i").classList.value
        cardTwoIcon = cardTwo.querySelector(".back-view i").classList.value
        matchCars(cardOneIcon , cardTwoIcon)
    }
}


const newarr = []







function matchCars(icon1 , icon2 ){
    if(icon1 === icon2){
        matchedCards++
        if(matchedCards == 6 && timeLeft > 0){
            setTimeout(() => {
            alert.classList.remove("playhidden")
            playBTN.addEventListener("click" , () => {
                alert.classList.add("playhidden")
                shuffleCards()
            })
            } , 1500)
            const maxPoint = Math.max(...newarr)
            return clearInterval(timer)
        }
        cardOne.removeEventListener("click" , flipCard)
        cardTwo.removeEventListener("click" , flipCard)
        cardOne = cardTwo = ""
        return disableDeck = false
    }
    setTimeout(() => {
        cardOne.classList.add("shake")
        cardTwo.classList.add("shake")
    } , 400)

    setTimeout(() => {
        cardOne.classList.remove("shake" ,"flip")
        cardTwo.classList.remove("shake" ,"flip")
        cardOne = cardTwo = ""
        disableDeck = false
    } , 500)
}












function shuffleCards(){
    timeLeft = maxTime
    flips = matchedCards = 0
    cardOne = cardTwo = ""
    clearInterval(timer)
    timeTag.innerText = timeLeft
    flipsTag.innerText = flips
    disableDeck = isPlaying = false

   
    let arr = ["bxl-instagram-alt","bxl-telegram-alt","bxl-youtube","bxl-facebook","bxl-twitter","bxl-google","bxl-telegram-alt","bxl-instagram-alt","bxl-youtube","bxl-facebook","bxl-twitter","bxl-google"]

    let arr1 = ["bxl-instagram-alt","bxl-tiktok","bxl-youtube","bxl-facebook","bxl-twitter","bxl-google","bxl-instagram-alt","bxl-tiktok","bxl-youtube","bxl-facebook","bxl-twitter","bxl-google"]


    let arr2 = ["bx-dice-1", "bx-dice-2", "bx-dice-3", "bx-dice-4", "bx-dice-5", "bx-dice-6", "bx-dice-1", "bx-dice-2", "bx-dice-3", "bx-dice-4", "bx-dice-5", "bx-dice-6",] 

    arr1.sort(() => Math.random() > 0.5 ? 1 : -1)
    arr2.sort(() => Math.random() > 0.5 ? 1 : -1)
 
    cards.forEach((card, index) => {
        card.classList.remove("flip")
        let iconTag = card.querySelector(".back-view i")
        setTimeout(() => {
            social.addEventListener("click" , () => {
                iconTag.classList.value = `bx ${arr1[index]}`
                modeMenu.style.display = "none"
                shuffleCards()
            })
            // iconTag.classList.value = `bx ${arr1[index]}`
            dice.addEventListener("click" , () => {
                iconTag.classList.value = `bx ${arr2[index]}`
                modeMenu.style.display = "none"
                shuffleCards()
            })
        }, 500)

        card.addEventListener("click" , flipCard)
    })
}



menu.addEventListener("click" , () => {
    modeMenu.style.display = "flex"
})












shuffleCards()

refreshBTN.addEventListener("click" , shuffleCards)

cards.forEach(card => {
    card.addEventListener("click" , flipCard)
})



