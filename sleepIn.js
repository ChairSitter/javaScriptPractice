function makeBricks(small, big, goal) {
    let smallTotal = 0;
    let bigTotal = 0;
    for (let i = 0; i < small+1; i++) {
        for (let j = 0; j < (big + 2); j++) {
            bigTotal = (j * 5);
            console.log(smallTotal, bigTotal, goal)
            if (smallTotal + bigTotal === goal) {
                return true;
            }
        }
        smallTotal++;
    }
    return false;
}
console.log(makeBricks(20, 0, 19));