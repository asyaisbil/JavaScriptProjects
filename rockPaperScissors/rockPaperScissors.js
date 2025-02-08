function rockPaperScissors(choiceOfUser) {
    let choiceOfComp;
    let randomIndex = Math.floor(Math.random() * 3);
    if (randomIndex === 0) {
        choiceOfComp = "rock";
    } else if (randomIndex === 1) {
        choiceOfComp = "paper";
    } else {
        choiceOfComp = "scissors"
    }

    if (choiceOfUser === choiceOfComp) {
        result = "A tie!";
    } else if (choiceOfUser === "rock" && choiceOfComp === "scissors" || choiceOfUser === "scissors" && choiceOfComp === "paper" || choiceOfUser === "paper" && choiceOfComp === "rock") {
        result = "You Win!";
    } else {
        result = "You lost!";
    }     

    return `Your choice: ${choiceOfUser}. The choice of computer: ${choiceOfComp}. So, ${result}`
}

console.log(rockPaperScissors("scissors"));
