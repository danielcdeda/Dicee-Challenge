    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Número aleatório do primeiro dado
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Número aleatório do segundo dado
    var diceImg1 = ["./images/dice" + randomNumber1 + ".png"]; // Imagem do Dado 1
    var diceImg2 = ["./images/dice" + randomNumber2 + ".png"]; // Imagem do Dado 2

    document.querySelector("img").setAttribute("src", diceImg1); // Resultado do primeiro dado com imagem //
    document.querySelector("img.img2").setAttribute("src", diceImg2); // Resultado do Segundo dado com imagem //

// Resultados finais com mensagens do ganhador // 

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}
else {
    document.querySelector("h1").textContent = "Draw!";
}