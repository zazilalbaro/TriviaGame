window.onload = function() {

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
		qNumber: -1,
		wins: 0,
		losses: 0,
		gameOn: false,
		intervalId: null,
		time: 30,

		start: function() {
		    if (!this.gameOn) {
		    	this.qNumber = -1;
		        this.newQuestion();
		        this.gameOn = true;
		    };
		},

		clickedAnswer: function(selectedAns) {
			console.log("clicked corr answer" + this.questions[this.qNumber].correctAns);
			if (selectedAns == this.questions[this.qNumber].correctAns) {
				this.wins++;
				$("#label" + selectedAns).addClass("goodColor");
				$("#wins").addClass("goodColor");

				setTimeout(function() {
					$("#label" + selectedAns).removeClass("goodColor");
					$("#wins").removeClass("goodColor");
					
	    			game.newQuestion();
	 			}, 3000);
 			
			}
			else {
				this.losses++;
				$("#label" + selectedAns).addClass("badColor");
				$("#losses").addClass("badColor");
				$("#label" + this.questions[this.qNumber].correctAns).addClass("goodColor");
		
				setTimeout(function() {
					$("#label" + selectedAns).removeClass("badColor");
					$("#losses").removeClass("badColor");
					$("#label" + game.questions[game.qNumber].correctAns).removeClass("goodColor");
	    			
	    			game.newQuestion();
	 			}, 3000);
 			};
 			
 			this.updateHTML(this.qNumber);
		},

		newQuestion: function() {
			this.qNumber++;
			console.log("nq questions length" + this.questions.length);
			if (this.qNumber == this.questions.length) {
				this.endGame();
			}
			else {
				console.log("nq else this question number" + this.qNumber);
				this.updateHTML(this.qNumber);
				// this.time = 30
				// setInterval(function() {
				// 	if (this.time == 0) {
				// 		clearInterval();

				// 		setTimeout(function() {
			 // 			this.newQuestion();
			 // 			}, 3000);;
				// 	}
				// 	else {
				// 		this.time--;
				// 	}
		  //   		$("#timer").html("Seconds left: " + this.time);
				// }, 1000);	
			}

		},

		endGame: function() {
			alert("Game Over!");
			this.gameOn = false;
			$(".stuff").empty();
			$("#losses").html("Incorrect Answers: " + this.losses);
  			$("#wins").html("Correct Answers: " + this.wins);
  			$("#timer").html("Seconds left: " + this.time);
		},

		updateHTML: function(currentQuestion) {
			console.log("update HTML current question" + currentQuestion);
			$(".stuff").empty();
  			$("#question").append('<h2/>').html(this.questions[currentQuestion].question);
  			
  			$("#buttonA").append('<input type="radio" name="choices" value="A"/>');
			$("#labelA").append('<label/>').html(this.questions[currentQuestion].answerA);
  			
  			$("#buttonB").append('<input type="radio" name="choices" value="B"/>');
			$("#labelB").append('<label/>').html(this.questions[currentQuestion].answerB);

			$("#buttonC").append('<input type="radio" name="choices" value="C"/>');
			$("#labelC").append('<label/>').html(this.questions[currentQuestion].answerC);

			$("#buttonD").append('<input type="radio" name="choices" value="D"/>');
			$("#labelD").append('<label/>').html(this.questions[currentQuestion].answerD);

  			$("#losses").html("Incorrect Answers: " + this.losses);
  			$("#wins").html("Correct Answers: " + this.wins);

  			$("#timer").html("Seconds left: " + this.time);
  		},

		

  	}; // end of game obj




	$("#start").on("click", function() {
		game.start();
	});

	$("div").on("click", "input", function(){
	    selectedAns = $("input:radio[name='choices']:checked").val();
	    console.log("onclick sel ans" + selectedAns);
	    game.clickedAnswer(selectedAns);
	});




	// stopwatch


	// var stop = function() {
	// 	game.losses++;
	// 	clearInterval(game.intervalId);
	// 	clearTimer
	// 	game.gameOn = false;
	// };


}; // end of js	        

	

// when the time runs out
	// stop the timer
	// losses++
	// show correct ans
	// call next question

// when the user selects an answer
	// 














