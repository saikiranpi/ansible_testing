let score = 0;

function incrementScore() {
    score++;
    document.getElementById("score").innerText = score;
}

function resetScore() {
    score = 0;
    document.getElementById("score").innerText = score;
}
