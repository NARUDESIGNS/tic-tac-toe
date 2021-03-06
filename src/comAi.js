const comAi = (turn, boardState, rules, handleClick, roundIsCompleted) => {
    // generate random spot 
    // check if spot is empty then play there else check for other empty spots
    const playRandomly = () => {
        let randVal = Math.round(Math.random() * 8);
        let getRandomSpot = true;
        while (boardState[randVal] && getRandomSpot) {
            if (roundIsCompleted) getRandomSpot = false;
            randVal = Math.round(Math.random() * 8);
        }
        return randVal;
    }
    
    // check if it's com's turn, i.e check if turn is set to false (which indicates human's turn is true);
    if (!turn) {
        let empty = null;
        for (let row of rules) {
            const [x,y,z] = row;
            // if spot x isn't empty and 2 adjacent spots carries same mark, then play on the spot
            if (!boardState[x] && (boardState[y] && boardState[z]) && (boardState[y] === boardState[z])) empty = x;
            else if (!boardState[y] && (boardState[x] && boardState[z]) && (boardState[x] === boardState[z])) empty = y;
            else if (!boardState[z] && (boardState[x] && boardState[y]) && (boardState[x] === boardState[y])) empty = z;
            if (empty || empty === 0) break;
        }
        if (empty || empty === 0) handleClick(empty); // check empty === 0 here because 0 evaluates to false if this isn't specified
        else handleClick(playRandomly()); // play on random empty spot
    }
}

export default comAi;