const form = document.querySelector('form');

const answer = {
    q1: "Jupiter",
    q2: "Alexander Graham Bell",
    q3: "Paris",
    q4: "Nile",
    q5: "Leonardo da Vinci",
    q6: "Au",
    q7: "Australia",
    q8: "Robert Downey Jr.",
    q9: "Tokyo",
    q10: "C"
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    let finalScore = 0;

    for(let [name, value] of data.entries()) {
        // console.log(name, value); 
        if(answer[name] == value)
            finalScore++;
    }

    document.getElementById('out').textContent = `Your score is ${finalScore} out of 10`;

    form.reset();

})