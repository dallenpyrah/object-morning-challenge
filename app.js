let waterBottle = {
        color: "black",
        height: 9,
        full: true,
        contents: ['water',' ice',' gfuel']
    }

let stringDescription = `My water bottle is ${waterBottle.color} and its got a height of ${waterBottle.height} inches. Yes it is ${waterBottle.full} 
that I filled it up this morning. What I put inside of it was ${waterBottle.contents}.`

console.log(stringDescription);

let reallyBigTank = {
    color: "green",
    height: 10,
    damaged: true,
    gas: false,
    peopleInside: ['john','kyle','zack','caleb','conner','chris','dallen','kurt'],
    differentJobs: ['casing loader','driver','mechanic','gps guy','lookout','team leader'],
    ages: [18,21,22,17,25,31,28,36,41,24,29],
    loveForTheHomiez: false,
    goingHomeAnytimeSoon: "Never",
    weAreStuckHereForever: true,
    dayzOutHere: 361
}

let reallyBigTankDescription = `We have been out here in the outback for ${reallyBigTank.dayzOutHere} days in our big ${reallyBigTank.height} foot tall tank.
We can't get back home because our gas is ${reallyBigTank.gas}`
