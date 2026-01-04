
// Guess Number from 1 to 100
function guessGame() {

    let random = Math.floor(Math.random() * 100) + 1;
    let guess;
    let attempts = 0;
    const maxAttempts = 5;

    while (attempts < maxAttempts) {

        guess = Number(
            prompt(`Guess a number between 1-100
Attempts left: ${maxAttempts - attempts}
(Enter 0 to quit)`)
        );

        if (guess === 0) {
            console.log("Game exited by user.");
            break;
        }

        if (isNaN(guess) || guess < 1 || guess > 100) {
            console.log("❌ Invalid input!");
            continue;
        }

        attempts++;

        if (guess > random) {
            console.log("📈 Too high!");
        } else if (guess < random) {
            console.log("📉 Too low!");
        } else {
            console.log("🎉 You guessed it!");
            break;
        }

        if (attempts === maxAttempts) {
            console.log(`😢 You lost! Number was ${random}`);
        }
    }
}


guessGame();