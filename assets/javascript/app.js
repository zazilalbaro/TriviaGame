window.onload = function() {

var game = {

	questionObj1 : {
		question : "What is the name of Jon Snow's Direwolf?",
		answerA : "White",
		answerB : "Greyworm",
		answerC : "Ghost",
		answerD : "Frey",
		correctAns : "C"
	},

	questionObj2 : {
		question : "What is the Lannister House sigil?",
		answerA : "Wolf",
		answerB : "Stag",
		answerC : "Three-headed red dragon",
		answerD : "Lion",
		correctAns : "D"
	},
			
	wins: 0,
	losses: 0,
	gameOn: false,
	intervalId: null,
	stopwatch : {

		time : 30,

		start: function() {
		    if (!game.gameOn) {
		        game.intervalId = setInterval(game.stopwatch.count, 1000);
		        game.gameOn = true;
		    };
		},
		count: function() {
    	    game.stopwatch.time--;
		    $("#timer").html("Time left: " + game.stopwatch.time);
  		},
  		stop: function(intervalId) {
  			game.losses++;
  			clearInterval(game.intervalId);
  			clearTimeout(game.stopwatch.time);
   			game.gameOn = false;
  		},
  		timeout: setTimeout(function(){
        
      }, 0);
	}


}; // end of object



$("#start").on("click", game.stopwatch.start);
















}; // end of js