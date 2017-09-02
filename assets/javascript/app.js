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
		
		// questionsArr: ["questionObj1","questionObj2","questionObj3","questionObj4"],
		currentQuestion: null,
		wins: 0,
		losses: 0,
		gameOn: false,
		intervalId: null,

		start: function() {
		    if (!this.gameOn) {
		        this.intervalId = setInterval(this.stopwatch.count, 1000);
		        this.stopwatch.start
		        this.gameOn = true;
		        this.currentQuestion = this.questions[0];
		        console.log(this.currentQuestion)
		        this.updateHTML(0);
		    };
		},

		clickedAnswer: function(selectedAns) {


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

  			$("#timer").html("Time left: " + this.stopwatch.time);
  		},

		stopwatch: {

			time: 30,

			
			count: function() {
	    	    this.time--;
			    $("#timer").html("Time left: " + this.time);
	  		},

	  		stop: function(time, intervalId) {
	  			game.losses++;
	  			clearInterval(game.intervalId);
	  			timeout(this.time);
	   			game.gameOn = false;
	  		},
	  	},
	  		// timeout: setTimeout(() {
	        
	    //   	}, 0),

  	}; // end of object



	$("#start").on("click", function() {
		game.start();
	});

	$("input").on("click", function(){
	    selectedAns = $("input:radio[name='choices']:checked").val();
	    clickedAnswer(selectedAns);
	});

	$("input:radio[name='choices']:checked").val();

// when the time runs out
	// stop the timer
	// losses++
	// call next question

// when the user selects an answer
	// 














}; // end of js