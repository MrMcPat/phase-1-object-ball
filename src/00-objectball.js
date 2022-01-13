function gameObject() {
    const game = {
        home: {
            teamName: "Brooklyn Nets",
            colors: "Black, White",
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steas: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: "Turquoise, Purple",
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            },
        }
    }
    return game;
}

//Which player has the most points? Call the function mostPointsScored.
  
function mostPointsScored() {
    let object = gameObject();
    let pointsArray = [];
    for (let homeAway in object) {
        let teamObject = object[homeAway];
        for (let teamKey in teamObject) {
            let playerObject = teamObject[teamKey];
            for (let playerKey in playerObject) {
                let playerName = playerObject[playerKey];
                for (let pointKey in playerName) {
                    let points = playerName[pointKey]; 
                    pointsArray.push(points);
                }
            }
        }
    }
    let pointResult = pointsArray.filter(element => typeof element === "number")
    return Math.max(...pointResult);
}

//Which team has the most points? Call the function winningTeam.

function winningTeam() {
    let object2 = gameObject();
    let teamArray = [];
    let homeArray = [];
    let awayArray = [];
    for (let homeAway in object2) {
       let teamObject2 = object2[homeAway];
       teamArray.push(teamObject2);
    }
     let homeTeamObject = teamArray[0].players;
     let awayTeamObject = teamArray[1].players;
     for (let homeTeam in homeTeamObject) {
         let homeTeamPoints = homeTeamObject[homeTeam];
         for (let homePoints in homeTeamPoints) {
             let homePlayerPoints = homeTeamPoints[homePoints];
             homeArray.push(homePlayerPoints);
             
         }
     }
     for (let awayTeam in awayTeamObject) {
         let awayTeamPoints = awayTeamObject[awayTeam];
         for (let awayPoints in awayTeamPoints) {
             let awayPlayerPoints = awayTeamPoints[awayPoints];
             awayArray.push(awayPlayerPoints);
         }
     }
     let homePointResult = homeArray.reduce((previousElement, currentElement) => previousElement + currentElement);
     let awayPointResult = awayArray.reduce((previousElement, currentElement) => previousElement + currentElement);
     return homePointResult > awayPointResult ? "Home" : "Away";
}

//Which player has the longest name? Call the function playerWithLongestName.

function playerWithLongestName() {
    let object3 = gameObject();
    let nameArray = [];
    for (let homeAway in object3) {
        let teamObject3 = object3[homeAway];
        for (let teamName in teamObject3) {
            let nameObject = teamObject3[teamName];
            nameArray.push(nameObject);
        }
    }
    const [brooklynNets, blackWhite, homePlayers, charlotteHornets, TurquoisePurple, awayPlayers] = nameArray;
    const playerNames = {...homePlayers, ...awayPlayers};
    const nameString = Object.keys(playerNames);
    return nameString.reduce((prevName, currentName) => prevName.length > currentName.length ? prevName : currentName);
}

//Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon.

function doesLongNameStealATon() {
    let object4 = gameObject();
    let nameArray2 = [];
    let stealsArray = [];
    for (let homeAway in object4) {
        let teamObject4 = object4[homeAway];
        for (let teamName in teamObject4) {
            let nameObject = teamObject4[teamName];
            nameArray2.push(nameObject);
        }
    }
    const [brooklynNets2, blackWhite2, homePlayers2, charlotteHornets2, TurpuoisePurple2, awayPlayers2] = nameArray2;
    const playerNames2 = {...homePlayers2, ...awayPlayers2};
    const nameString2 = Object.keys(playerNames2);
    const longestName = nameString2.reduce((prevName, currentName) => prevName.length > currentName.length ? prevName : currentName);
    for (let statAmount in playerNames2) {
        let stats = playerNames2[statAmount];
        stealsArray.push(stats.steals);
    }
    const mostSteals = stealsArray.reduce((prevName, currentName) => prevName > currentName ? prevName : currentName);
    const allPlayerStats = {...object4.home.players, ...object4.away.players};
    return allPlayerStats[longestName].steals === mostSteals ? true : false;
}