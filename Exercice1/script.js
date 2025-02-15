//fonction pour saisir la difficulte
function getDifficulty() {
    let difficulty = window.prompt("Choose difficulty: easy, medium, hard").toLowerCase();
    let maxAttempts, maxNumber;
    
    switch (difficulty) {
        case "easy":
            maxAttempts = 10;
            maxNumber = 50;
            break;
        case "medium":
            maxAttempts = 7;
            maxNumber = 100;
            break;
        case "hard":
            maxAttempts = 5;
            maxNumber = 200;
            break;
        default:
            alert("Invalid choice! Therefore , the difficulty will be set to medium.");
            maxAttempts = 7;
            maxNumber = 100;
    }
    return { maxAttempts, maxNumber };
}
//fonction pour generer un nombre aleatoire entre les bornes de notre intervalle
function getRandomTarget(maxNumber) {
    return Math.floor(Math.random() * maxNumber) + 1;
}
//fonction our saisir l'input de l'utilisateur
function getUserGuess(maxNumber) {
    return parseInt(prompt(`Guess a number between 1 and ${maxNumber}:`), 10);
}
//fonction pour verifier si le nombre que l'utilisateur a choisi est egal au nombre aleatoire
function checkGuess(guess, target) {
    if (guess === target) {
        alert("Congratulations! You found the number.");
        return true;
    } else if (guess > target) {
        alert("Too high!");
    } else {
        alert("Too low!");
    }
    return false;
}
// fonction pour donner un suggestion de jouer encore une fois
function playAgain() {
    return confirm("Play again?");
}
//main function
function hiddenNumberGame() {
    const { maxAttempts, maxNumber } = getDifficulty();
    let target = getRandomTarget(maxNumber);
    let attempts = 0;
    let guess;

    while (attempts < maxAttempts) {
        guess = getUserGuess(maxNumber);
        if (checkGuess(guess, target)) {
            if (playAgain()) hiddenNumberGame();
            return;
        }
        attempts++;
    }
    alert(`Game over! The correct number was ${target}.`);
    if (playAgain()) hiddenNumberGame();
}
//execution de "main function"
hiddenNumberGame();
