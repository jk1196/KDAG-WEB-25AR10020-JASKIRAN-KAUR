function submitQuiz() {
    const answers = {
        q1: 'd',
        q2: 'b',
        q3: 'c',
        q4: 'b',
        q5: 'b'
    };

    let score = 0;
    const total = Object.keys(answers).length;
    let feedback = '';

    for (let key in answers) {
        // ✅ Fixed selector with backticks
        const question = document.querySelector(`input[name="${key}"]:checked`);
        if (question) {
            if (question.value === answers[key]) {
                score++;
                // ✅ Wrap HTML in backticks
                feedback += `<p>Question ${key.slice(1)}: ✅ Correct</p>`;
            } else {
                feedback += `<p>Question ${key.slice(1)}: ❌ Incorrect (Correct: ${answers[key].toUpperCase()})</p>`;
            }
        } else {
            feedback += `<p>Question ${key.slice(1)}: ❌ Not answered (Correct: ${answers[key].toUpperCase()})</p>`;
        }
    }

    document.getElementById("result").innerHTML = `
        <p>You scored ${score} out of ${total}!</p>
        ${feedback}
    `;
}
