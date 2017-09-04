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
			},

			{
				question: "Who was crowned with searing molten gold?",
				answerA: "Renly Baratheon",
				answerB: "Viserys Targaryen",
				answerC: "Eddard Stark",
				answerD: "Khal Drogo",
				correctAns: "B"
			},

			{
				question: "Who did King in the North Robb Stark marry?",
				answerA: "One of Lord Walder Frey's daughters",
				answerB: "Margaery Tyrell",
				answerC: "Ros",
				answerD: "Talisa Maegyr",
				correctAns: "D"
			},

			{
				question: "What is Brienne's surname?",
				answerA: "Tarth",
				answerB: "Mormont",
				answerC: "Tully",
				answerD: "Lannister",
				correctAns: "A"
			},

			{
				question: "Who was the true mastermind behind King Joffrey's murder?",
				answerA: "Olenna Tyrell",
				answerB: "Ellaria Sand",
				answerC: "Littlefinger",
				answerD: "Varys",
				correctAns: "A"
			},

			{
				question: "Who said this?: It's not easy being drunk all the time. Everyone would do it if it were easy.",
				answerA: "Bronn",
				answerB: "Tyrion Lannister",
				answerC: "King Robert",
				answerD: "Sandor Clegane",
				correctAns: "B"
			},

			{
				question: "Who are Jon Snow's real parents?",
				answerA: "Viserys Targaryen and Catelyn Stark",
				answerB: "Eddard Stark and a woman from a brothel in King's landing",
				answerC: "Rhaegar Targaryen and Lyanna Stark",
				answerD: "Aerys Targayen and Elia Martell",
				correctAns: "C"
			}
		],
		
		currentQuestion: null,
		qNumber: -1,
		wins: 0,
		losses: 0,
		gameOn: false,
		timerIntId: 0,
		intId: 0,
		timerRunning: false,
		time: 30,

		start: function() {
		    if (!this.gameOn) {
		    	this.qNumber = -1;
		    	this.wins = 0;
		    	this.losses = 0;
		        this.gameOn = true;
		        this.newQuestion();
		    };
		},

		clickedAnswer: function(selectedAns) {
			console.log("clicked corr answer" + this.questions[this.qNumber].correctAns);
			if (selectedAns == this.questions[this.qNumber].correctAns) {
				this.wins++;
				stopTimer(this.intId,this.timerIntId);
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
				stopTimer(this.intId,this.timerIntId);
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
			stopTimer(this.intId,this.timerIntId);
			console.log("nq questions length" + this.questions.length);
			if (this.qNumber == this.questions.length) {
				this.endGame();
			}
			else {
				console.log("nq else this question number" + this.qNumber);
				startTimer(this.time);
				this.updateHTML(this.qNumber);
				
			}

		},

		endGame: function() {
			alert("Game Over!");
			this.gameOn = false;
			$(".stuff").empty();
			$("#losses").html("Incorrect Answers: " + this.losses);
  			$("#wins").html("Correct Answers: " + this.wins);
  			$("#timer").html("Seconds for each question: 30");
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

	// timer

	function startTimer(seconds){
	  	var ms = seconds * 1000;

	  	if (!game.timerRunning) {
	        game.timerIntId = setInterval(function(){
	        seconds--;
	        updateTime(seconds);
	    	}, 1000);

	    game.timerRunning = true;
	    }

		game.intId = setTimeout(function(){
		 	timedOut();  
		},ms);
	}

	function timedOut(){ 
		stopTimer(game.intId, game.timerIntId);
		game.losses++;
		$("#label" + game.questions[game.qNumber].correctAns).addClass("goodColor");
		$("#losses").addClass("badColor");
		
		setTimeout(function() {
			$("#label" + game.questions[game.qNumber].correctAns).removeClass("goodColor");
			$("#losses").removeClass("badColor");
	    	game.newQuestion();
	 	}, 3000);
	 	game.updateHTML(game.qNumber);
	}

	function stopTimer(intId,timerIntId){
	 	clearTimeout(intId);
	  	clearInterval(timerIntId);
	  	game.timerRunning = false;
	}

	function updateTime(secondsLeft){
	  $("#timer").html("Seconds left: " + secondsLeft);
	}

}; // end of js	        

	












