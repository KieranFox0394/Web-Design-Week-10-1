var gameCount = 1;
var userWins = 0;
var resultText = document.getElementById("result");
var results = [];	

document.getElementById("rock").onclick = function(){
	if(gameCount <=5 && userWins < 1){
		gameCount++;
		results.push("rock");
		var randomChoice = Math.floor(Math.random() * 3);
		if(randomChoice == 0){//rock - tie
			document.getElementById("random").src = "img/rock.png";
			results.push("tie");
		}else if (randomChoice == 1){//paper
			document.getElementById("random").src = "img/paper.png";
			results.push("lose");
		}else{//scissors
			document.getElementById("random").src = "img/scissors.png";
			results.push("win");
			userWinsFn();
			gameOver();
		}
	}
}

document.getElementById("paper").onclick = function(){
	if(gameCount <=5 && userWins < 1){
		gameCount++;
		results.push("paper");
		var randomChoice = Math.floor(Math.random() * 3);
		if(randomChoice == 0){//rock
			document.getElementById("random").src = "img/rock.png";
			results.push("win");
			userWinsFn();
			gameOver();
		}else if (randomChoice == 1){//paper
			document.getElementById("random").src = "img/paper.png";
			results.push("tie");
		}else{//scissors
			results.push("lose");
			document.getElementById("random").src = "img/scissors.png";
		}
	}
}

document.getElementById("scissors").onclick = function(){
	if(gameCount <=5 && userWins < 1){
		gameCount++;
		var randomChoice = Math.floor(Math.random() * 3);
		if(randomChoice == 0){//rock
			results.push("lose");
			document.getElementById("random").src = "img/rock.png";

		}else if (randomChoice == 1){//paper
			document.getElementById("random").src = "img/paper.png";
			results.push("win");
			userWinsFn();
			gameOver();
		}else{//scissors
			results.push("tie");			
			document.getElementById("random").src = "img/scissors.png";

		}
	}

}

function userWinsFn()
{
	userWins++;
	
}

function gameOver(){
		var random = document.getElementById('random');
		random.style.opacity = 1.0;
		var rock = document.getElementById('rock');
		rock.style.opacity = 1.0;
		var paper = document.getElementById('paper');
		paper.style.opacity = 1.0;
		var scissors = document.getElementById('scissors');
		scissors.style.opacity = 1.0;
		
		
		for (var i = 0; i < results.length; i++) {
		result.appendChild(document.createTextNode(results[i]));
		result.appendChild(document.createElement("br"));
		}
	}