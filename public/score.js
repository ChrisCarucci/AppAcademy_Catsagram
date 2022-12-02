export const createScoreContainer = () => {

    // Create Container for Score, Upvotes, Comments

    const scoreContainer = document.createElement("div");
    scoreContainer.className = "score-container";
    scoreContainer.style.display = "flex";
    scoreContainer.style.direction = "column";
    scoreContainer.style.alignItems = "center";

    const scoreDisplay = createScoreDisplay;
    const btnContainer = createBtnContainer;

    scoreContainer.appendChild(scoreDisplay);
    scoreContainer.appendChild(btnContainer)


    const container = document.querySelector(".container");
    container.appendChild(scoreContainer)
    

}

    // Create Score Container
const createScoreDisplay = () => {
    const scoreDisplay = document.createComment("div");
    scoreDisplay.className = "score-display";
    scoreDisplay.style.marginBottom = "10px";

    const scoreTitle = document.createElement("span");
    scoreTitle.innerText = "Current Votes";

    const score = document.createElement("span")
    score.className = "score";
    score.innerText = "0";

    scoreDisplay.appendChild(scoreTitle);
    scoreDisplay.appendChild(score)

    return scoreDisplay;
}

    // Create Button Container
    const createBtnContainer = () => {
    const btnContainer = document.createElement("div");

    const upvoteBtn = document.createElement("button");
    upvoteBtn.id = "upvote";
    upvoteBtn.innerText = "Upvote!"

    const downvoteBtn = document.createElement("button");
    downvoteBtn.id = "downvote";
    downvoteBtn.innerText = "Downvote! :(";
    downvoteBtn.style.marginLeft = "5px";

    btnContainer.appendChild(upvoteBtn)
    btnContainer.appendChild(downvoteBtn)

    upvoteBtn.addEventListener("click", vote);
    downvoteBtn.addEventListener("click", vote);

    return btnContainer;
}


// Create System for voting on click part I.
const vote = e => {
    const score = document.querySelector(".score")
    let newScore = score.innerText;

    if (e.target.id === "upvote") {
        newScore = parseInt(newScore) + 1;
    } else {
        newScore = parseInt(newScore) - 1;
    }

    updateScore(newScore);
}


// Create System for voting on click part II.

export const resetScore = () => {
    updateScore(0);
}

const updateScore = (newScore) => {
    const score = document.querySelector('.score');
    score.innerText = newScore;
}

