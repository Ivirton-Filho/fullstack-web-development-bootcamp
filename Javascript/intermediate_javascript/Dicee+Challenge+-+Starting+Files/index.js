window.alert("Refresh Me!")
//Player 1
let randomNumber1 = Math.floor(Math.random()*6)
let imgPlayer1 = document.getElementById("diceOfPlayer1")

if(randomNumber1 == 1){
    imgPlayer1.setAttribute("src", "./images/dice1.png")
}else if(randomNumber1 == 2){
    imgPlayer1.setAttribute("src", "./images/dice2.png")
}else if(randomNumber1 == 3){
    imgPlayer1.setAttribute("src", "./images/dice3.png")
}else if(randomNumber1 == 4){
    imgPlayer1.setAttribute("src", "./images/dice4.png")
}else if(randomNumber1 == 5){
    imgPlayer1.setAttribute("src", "./images/dice5.png")
}else if(randomNumber1 == 6){
    imgPlayer1.setAttribute("src", "./images/dice6.png")
}

//Player 2
let randomNumber2 = Math.floor(Math.random()*6)
let imgPlayer2 = document.getElementById("diceOfPlayer2")

if(randomNumber2 == 1){
    imgPlayer2.setAttribute("src", "./images/dice1.png")
}else if (randomNumber2 == 2){
    imgPlayer2.setAttribute("src", "./images/dice2.png")
}else if (randomNumber2 == 3){
    imgPlayer2.setAttribute("src", "./images/dice3.png")
}else if (randomNumber2 == 4){
    imgPlayer2.setAttribute("src", "./images/dice4.png")
}else if (randomNumber2 == 5){
    imgPlayer2.setAttribute("src", "./images/dice5.png")
}else if (randomNumber2 == 6){
    imgPlayer2.setAttribute("src", "./images/dice6.png")
}


//h1 tag

let h1Id = document.getElementById("h1")

if (randomNumber1 > randomNumber2){
    h1Id.innerHTML = "Player 1 win!"
}else if (randomNumber1 < randomNumber2){
    h1Id.innerHTML = "Player 2 win!"
}else {
    h1Id.innerHTML = "draw!"
}