const comAi = (comMarker, turn, boardState, rules, handleClick) => {
    console.log('Com played');
    // generate random spot 
    // const playRandomly = () => {
    //     let randVal = 0;
    //     while(!boardState[randVal]) {
    //         randVal = Math.round(Math.random() * 8);
    //         console.log('got random spot');
    //     }
    //     return randVal;
    //     // if (!boardState[randVal]) return randVal;
    //     // check if spot is empty then play there
    // }
    
    // check if it's com's turn, i.e check if turn is set to false (which indicates human's turn is true);
    if (!turn) {
        for (let row of rules) {
            const [x,y,z] = row;
            // if spot x isn't empty and 2 adjacent spots carries same mark, then play on the spot
            if (boardState[x] && x === y) handleClick(z);
        }
        // handleClick(playRandomly());
        console.log('played on random spot');
    }
}

export default comAi;