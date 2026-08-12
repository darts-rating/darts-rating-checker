const button = document.getElementById("checkButton");
const zeroOneInput = document.getElementById("zeroOneScore");
const cricketInput = document.getElementById("cricketScore");
const totalResult = document.getElementById("totalResult");
const result = document.getElementById("result");

button.addEventListener("click", function () {
    const zeroOne = Number(zeroOneInput.value);
    const cricket = Number(cricketInput.value);
    
    let zeroOneRating = 1;
    let cricketRating = 1;

    if (zeroOneInput.value === "") {
        zeroOneRating = 0;
    } else if (zeroOne < 40) {
        zeroOneRating = 1 + (zeroOne / 40);
    } else if (zeroOne < 45) {
        zeroOneRating = 2 + ((zeroOne - 40) / 5);
    } else if (zeroOne < 50) {
        zeroOneRating = 3 + ((zeroOne - 45) / 5);
    } else if (zeroOne < 55) {
        zeroOneRating = 4 + ((zeroOne - 50) / 5);
    } else if (zeroOne < 60) {
        zeroOneRating = 5 + ((zeroOne - 55) / 5);
    } else if (zeroOne < 65) {
        zeroOneRating = 6 + ((zeroOne - 60) / 5);
    } else if (zeroOne < 70) {
        zeroOneRating = 7 + ((zeroOne - 65) / 5);
    } else if (zeroOne < 75) {
        zeroOneRating = 8 + ((zeroOne - 70) / 5);
    } else if (zeroOne < 80) {
        zeroOneRating = 9 + ((zeroOne - 75) / 5);
    } else if (zeroOne < 85) {
        zeroOneRating = 10 + ((zeroOne - 80) / 5);
    } else if (zeroOne < 90) {
        zeroOneRating = 11 + ((zeroOne - 85) / 5);
    } else if (zeroOne < 95) {
        zeroOneRating = 12 + ((zeroOne - 90) / 5);
    } else if (zeroOne < 102) {
        zeroOneRating = 13 + ((zeroOne - 95) / 7);
    } else if (zeroOne < 109) {
        zeroOneRating = 14 + ((zeroOne - 102) / 7);
    } else if (zeroOne < 116) {
        zeroOneRating = 15 + ((zeroOne - 109) / 7);
    } else if (zeroOne < 123) {
        zeroOneRating = 16 + ((zeroOne - 116) / 7);
    } else if (zeroOne < 130) {
        zeroOneRating = 17 + ((zeroOne - 123) / 7);
    } else {
        zeroOneRating = 18 + ((zeroOne - 130) / 7);
        
        if (zeroOneRating > 18.99) {
            zeroOneRating = 18.99
        }
    }
    
    if (cricketInput.value === "") {
        cricketRating = 0;
    } else if (cricket < 1.30) {
        cricketRating = 1 + (cricket / 1.30);
    } else if (cricket < 1.50) {
        cricketRating = 2 + ((cricket - 1.30) / 0.20);
    } else if (cricket < 1.70) {
        cricketRating = 3 + ((cricket - 1.50) / 0.20);
    } else if (cricket < 1.90) {
        cricketRating = 4 + ((cricket - 1.70) / 0.20);
    } else if (cricket < 2.10) {
        cricketRating = 5 + ((cricket - 1.90) / 0.20);
    } else if (cricket < 2.30) {
        cricketRating = 6 + ((cricket - 2.10) / 0.20);
    } else if (cricket < 2.50) {
        cricketRating = 7 + ((cricket - 2.30) / 0.20);
    } else if (cricket < 2.70) {
        cricketRating = 8 + ((cricket - 2.50) / 0.20);
    } else if (cricket < 2.90) {
        cricketRating = 9 + ((cricket - 2.70) / 0.20);
    } else if (cricket < 3.10) {
        cricketRating = 10 + ((cricket - 2.90) / 0.20);
    } else if (cricket < 3.30) {
        cricketRating = 11 + ((cricket - 3.10) / 0.20);
    } else if (cricket < 3.50) {
        cricketRating = 12 + ((cricket - 3.30) / 0.20);
    } else if (cricket < 3.75) {
        cricketRating = 13 + ((cricket - 3.50) / 0.25);
    } else if (cricket < 4.00) {
        cricketRating = 14 + ((cricket - 3.75) / 0.25);
    } else if (cricket < 4.25) {
        cricketRating = 15 + ((cricket - 4.00) / 0.25);
    } else if (cricket < 4.50) {
        cricketRating = 16 + ((cricket - 4.25) / 0.25);
    } else if (cricket < 4.75) {
        cricketRating = 17 + ((cricket - 4.50) / 0.25);
    } else {
        cricketRating = 18 + ((cricket - 4.75) / 0.25);

        if (cricketRating > 18.99){
            cricketRating = 18.99;
        }
    } 
    const totalRating = (zeroOneRating + cricketRating) / 2;

    let flight = "";

    if (totalRating === 0) {
        flight = "";
    } else if (totalRating < 4) {
        flight = "C";
    } else if (totalRating < 6) {
        flight = "CC";
    } else if (totalRating < 8) {
        flight = "B";
    } else if (totalRating < 10) {
        flight = "BB";
    } else if (totalRating < 13) {
        flight = "A";
    } else if (totalRating < 16) {
        flight = "AA";
    } else {
        flight = "SA";
    }

    if (flight === "") {
        flightResult.textContent = "";
    } else {
        flightResult.textContent = flight + " FLIGHT";
    }

    totalResult.textContent = "Rating : " + totalRating.toFixed(2);

    result.textContent =
        "01 Rating : " + zeroOneRating.toFixed(2) + 
        "\nCRICKET Rating : " + cricketRating.toFixed(2);

});