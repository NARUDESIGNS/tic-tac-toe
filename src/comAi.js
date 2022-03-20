const comAi = (turn, boardState, rules, handleClick, roundIsCompleted) => {
    // generate random spot 
    // check if spot is empty then play there
    const playRandomly = () => {
        let randVal = 0;
        let getRandomSpot = true;
        while(boardState[randVal] && getRandomSpot) {
            if (roundIsCompleted) getRandomSpot = false;
            randVal = Math.round(Math.random() * 8);
            console.log('random spot ' + randVal);
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
            if (!boardState[y] && (boardState[x] && boardState[z]) && (boardState[x] === boardState[z])) empty = y;
            if (!boardState[z] && (boardState[x] && boardState[y]) && (boardState[x] === boardState[y])) empty = z;
        }
        if (empty) {
            console.log('empty is currently - ' + empty);
            handleClick(empty);
        } else handleClick(playRandomly());
    }
}

export default comAi;