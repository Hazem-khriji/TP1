function hiddenNumberGame() {
    let difficulty = window.prompt("Choose difficulty: Easy, Medium, Hard").toLowerCase();
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
            alert("Invalid choice! Defaulting to Medium difficulty.");
            maxAttempts = 7;
            maxNumber = 100;
    }

    let target = Math.floor(Math.random() * maxNumber) + 1;
    let attempts = 0;
    let guess;

    while (attempts < maxAttempts) {
        guess = parseInt(prompt(`Guess a number between 1 and ${maxNumber}:`), 10);
        if (guess === target) {
            alert("Congratulations! You found the number.");
            return;
        } else if (guess > target) {
            alert("Too high!");
        } else {
            alert("Too low!");
        }
        attempts++;
    }
    alert(`Game over! The correct number was ${target}.`);
    if (confirm("Play again?")) hiddenNumberGame();
}
hiddenNumberGame();