

	var game = {

		questions: [

			{
				question: "What is the name of Jon Snow's Direwolf?",
				answerA: "White",
				answerB: "Greyworm",
				answerC: "Ghost",
				answerD: "Shadow",
				correctAns: "C"
			},

			{
				question: "What is the Lannister House sigil?",
				answerA: "Wolf",
				answerB: "Stag",
				answerC: "Bear",
				answerD: "Lion",
				correctAns: "D"
			},

			{
				question: "Who was the youngest Stark child?",
				answerA: "Brandon",
				answerB: "Arya",
				answerC: "Rickon",
				answerD: "Sansa",
				correctAns: "C"
			},

			{
				question: "Which castle belongs to House Frey?",
				answerA: "The Twins",
				answerB: "Highgarden",
				answerC: "The Erie",
				answerD: "Casterly Rock",
				correctAns: "A"
			}

		],
		
		currentQuestion: null,
		qNumber: 0,
		wins: 0,
		losses: 0,
		gameOn: false,
		intervalId: null,
		time: 30,

		start: function() {
		    if (!this.gameOn) {
		        this.newQuestion();
		        this.gameOn = true;
		        this.currentQuestion = this.questions[this.qNumber];
		    };
		},

		clickedAnswer: function(selectedAns) {

			setTimeout(function() {
    			this.newQuestion();
 			}, 5000);
		},

		newQuestion: function() {
			this.qNumber++;
			this.updateHTML(this.qNumber);
			
			setInterval(function() {
				if (game.time == 0) {
					clearInterval(countdown);

					setTimeout(function() {
		    			this.newQuestion();
		 			}, 5000);;
				}
	    		$("#timer").html("Seconds left: " + this.time);
			}, 1000);
		},

		updateHTML: function(currentQuestion) {
  			$("#question").append('<h2/>').html(this.questions[currentQuestion].question);
  			
  			$("#buttonA").append('<input type="radio" value="A"/>');
			$("#labelA").append('<label/>').html(this.questions[currentQuestion].answerA);
  			
  			$("#buttonB").append('<input type="radio" value="B"/>');
			$("#labelB").append('<label/>').html(this.questions[currentQuestion].answerB);

			$("#buttonC").append('<input type="radio" value="C"/>');
			$("#labelC").append('<label/>').html(this.questions[currentQuestion].answerC);

			$("#buttonD").append('<input type="radio" value="D"/>');
			$("#labelD").append('<label/>').html(this.questions[currentQuestion].answerD);

  			$("#losses").html("Incorrect Answers: " + this.losses);
  			$("#wins").html("Correct Answers: " + this.wins);

  			$("#timer").html("Seconds left: " + this.time);
  		},

		

  	}; // end of game obj


window.onload = function() {

	$("#start").on("click", function() {
		game.start();

		

	});

	$("input").on("click", function(){
	    selectedAns = $("input:radio[name='choices']:checked").val();
	    clickedAnswer(selectedAns);
	});


	// stopwatch


	var stop = function() {
		game.losses++;
		clearInterval(game.intervalId);
		clearTimer
		game.gameOn = false;
	};


}; // end of js	        

	

// when the time runs out
	// stop the timer
	// losses++
	// call next question

// when the user selects an answer
	// 














