// quiz.js
// Define the checkAnswer function to handle the quiz logic.
function checkAnswer() {
    // 1. Identify the correct answer.
    const correctAnswer = "4";

    // 2. Retrieve the user's selected answer.
    // We use document.querySelector to find the checked radio button by its name.
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = null;

    // Check if a radio button was selected to avoid errors.
    if (selectedRadio) {
        userAnswer = selectedRadio.value;
    }

    // 3. Compare the user's answer with the correct answer.
    const feedbackElement = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        // If the answer is correct, display a success message.
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = '#28a745';
    } else {
        // If the answer is incorrect, display an error message.
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = '#dc3545';
    }
}

// 4. Add an event listener to the "Submit Answer" button.
// The checkAnswer function is passed as a reference, so it will be executed on click.
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);