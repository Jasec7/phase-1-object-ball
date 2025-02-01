function gameObject(){

const ball = {
    homeTeam:{
        teamName: "Broklyn Nets",
        colors:["Black", "White"],
        players:{
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 13,
                blocks: 1,
                slamDunks: 1,
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,
            },
            "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,
        },
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5, 

        },
            "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1, 
        },   

        },
    },
    awayTeam: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,
            },
            "Desagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,
            },
            "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
            },
        },
    },
};
    return ball;
};

function homeTeamName() {
    let object = gameObject();
    return object.homeTeam.teamName;
  };

  function awayTeamName(){
    let object = gameObject();
    return object.awayTeam.teamName;
  };
  
  function awayTeamName(){
    let object = gameObject();
    return object.awayTeam.colors;
  };
  
  function homeTeamName() {
    let object = gameObject();
    return object.homeTeam.colors;
  };

  function numPointsScored(playerName){
    const game = gameObject();
    
    const teams = [game.homeTeam, game.awayTeam];
    for (const team of teams) {
        
        const players = team.players;

        for (const name in players) {
            if (name === playerName) {
                return players[name].points; 

    }
   }
  }
};

function shoeSize(playerName){
    const game = gameObject();
    
    const teams = [game.homeTeam, game.awayTeam];
    for (const team of teams) {
        
        const players = team.players;

        for (const name in players) {
            if (name === playerName) {
                return players[name].shoe; 
            }
        }
    }
};

function playerNumber(playerName){
    const game = gameObject();
    
    const teams = [game.homeTeam, game.awayTeam];
    for (const team of teams) {
        
        const players = team.players;

        for (const name in players) {
            if (name === playerName) {
                return players[name].number;
         }
        }
    }
};

function playerStats(playerName){
    const game = gameObject();
    
    const teams = [game.homeTeam, game.awayTeam];
    for (const team of teams) {
        
        const players = team.players;

        for (const name in players) {
            if (name === playerName) {
                return players[name];
         }
        }
    }

};

function bigShoeRebounds() {
    const game = gameObject();
    const teams = [game.homeTeam, game.awayTeam];

    let largestShoeSize = 0;
    let reboundsForLargestShoe = 0;

    for (const team of teams) {
        const players = team.players;

        for (const playerName in players) {
            const player = players[playerName];

            if (player.shoe > largestShoeSize) {
                largestShoeSize = player.shoe;
                reboundsForLargestShoe = player.rebounds;
            }
        }
    }

    return reboundsForLargestShoe;
};

function mostPointsScored() {
    const game = gameObject();
    const teams = [game.homeTeam, game.awayTeam];

    let mostPointsScored = 0;
    let playerWithMostPoints = '';

    for (const team of teams) {
        const players = team.players;

        for (const playerName in players) {
            const player = players[playerName];

    
            if (player.points > mostPointsScored) {
                mostPointsScored = player.points;
                playerWithMostPoints = playerName; 
            }
        }
    }

    return `Player with the most points is ${playerWithMostPoints} with ${mostPointsScored} points.`;
}
