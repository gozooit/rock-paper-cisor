function computerPlay() {
    let res;
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            res = "Rock";
            break;
        case 1:
            res = "Paper";
            break;
        case 2:
            res = "Scissors";
            break;
    }
    return res;
}