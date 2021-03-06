$("#start").on('click',function(){
    game.start();
})


$(document).on('click','#end',function(){
	game.done();
})
var questions = [{

        question: "What is the Capital of Italy?", 
		choice: ["Sana'a",  "Rome", "Cairo", "Madrid"],
		answer: "Rome",
		photo: "assets/images/rome.jpg",
	 },
	 {
	 	question: "What is the Capital of Greece?", 
		choice: ["Athens", "Seoul", "Lisbon", "Rome"],
		answer: "Athens",
		photo: "assets/images/athens.jpg"
	 }, 
	 {
	 	question: "What is the Capital of Iraq?", 
		choice: ["Dubai", "Jeddah", "Baghdad", "Tahran" ],
		answer: "Baghdad",
		photo: "assets/images/Baghdad.jpg"
	}, 
	{
		question: "What is the Capital of Egypt?", 
		choice: ["Hanoi", "Suva", "Cairo", "Madrid" ],
		answer: "Cairo",
		photo: "assets/images/cairo.jpg"
	}, 
	{
		question: "What is the Capital of United State?", 
		choice: ["Stockholm", "Kingston", "Seoul", "DC" ],
		answer: "DC",
		photo: "assets/images/DC.jpg"
	}, 
	{
		question: "What is the Capital of Spain?", 
		choice: ["Caracas", "Madrid", "Athens", "Dublin" ],
		answer: "Madrid",
		photo: "assets/images/madrid.jpg"
	}, 
	{
		question: "What is the Capital of France?", 
		choice: ["Caracas", "Paris", "Brussels", "Nairobi" ],
		answer: "Paris",
		photo: "assets/images/paris.jpg"
	}, 
	{
		question: "What is the Capital of Russia?", 
		choice: ["Moscow", "Athens", "Dublin", "Nairobi" ],
		answer: "Moscow",
		photo: "assets/images/Moscow.jpg"
	}, 
	{
		question: "What is the Capital of Yemen?", 
		choice: ["Caracas", "Sanaa", "Brussels", "Bangkok" ],
		answer: "Sanaa",
		photo: "assets/images/Sana'a.jpg"
	}, 
	{
		question: "What is the Capital of Japan?", 
		choice: ["Tokyo", "Kiev", "Cardiff", "Seoul" ],
		answer: "Tokyo",
		photo: "assets/images/tokyo.jpg"
    }];
    
    


    var game = {

        correct:0,
        incorrect: 0,
        counter: 40,
        countdown: function(){
            game.counter--;
            $("#counter").html(game.counter);
            if( game.counter<=0){
                console.log("Time is up!");
                game.done();
            }
        },
        start: function(){ 
            timer = setInterval(game.countdown,1000);   
             $("#subwrapper").prepend('<h1 class="font">Time Remaining: <span id="counter">40</span> Seconds</h1>');
             $("#start").remove();
             $("#title").remove();
			 for(var i = 0; i <questions.length; i++){
                $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
                for(var j=0; j <questions[i].choice.length; j++){
                    // $("#subwrapper").append("<br>");
                    $("#subwrapper").css("margin", "100px");
                	$("#subwrapper").append("<input class='selection' type='radio' name='question-"+i+"' value='" + questions[i].choice[j]+ "'>"+questions[i].choice[j]);
                    $(".selection").css("margin", "25px");
                    // $("#subwrapper").css("border", "3px solid red");



            	}
    
    
			 }
			 $("#subwrapper").append('<br> <br><button id="end" class="btn btn-primary">DONE</button>');
		
        },
        done : function(){
            $.each($("input[name='question-0']:checked"),function(){
                if($(this).val()==questions[0].answer){
                    game.correct++;
                } else{
                    game.incorrect++;
                }
			 });
			 $.each($("input[name='question-1']:checked"),function(){
                if($(this).val()==questions[1].answer){
                    game.correct++;
                } else{
                    game.incorrect++;
                }
             });
			 $.each($("input[name='question-2']:checked"),function(){
                if($(this).val()==questions[2].answer){
                    game.correct++;
                } else{
                    game.incorrect++;
                }
             });
			 $.each($("input[name='question-3']:checked"),function(){
                if($(this).val()==questions[3].answer){
                    game.correct++;
                } else{
                    game.incorrect++;
                }
             });

			 $.each($("input[name='question-4']:checked"),function(){
                if($(this).val()==questions[4].answer){
                    game.correct++;
                } else{
                    game.incorrect++;
                }
             });

			 $.each($("input[name='question-5']:checked"),function(){
                if($(this).val()==questions[5].answer){
                    game.correct++;
                } else{
                    game.incorrect++;
                }
             });

			 $.each($("input[name='question-6']:checked"),function(){
                if($(this).val()==questions[6].answer){
                    game.correct++;
                } else{
                    game.incorrect++;
                }
             });

			 $.each($("input[name='question-7']:checked"),function(){
                if($(this).val()==questions[7].answer){
                    game.correct++;
                } else{
                    game.incorrect++;
                }
			 });
			 $.each($("input[name='question-8']:checked"),function(){
                if($(this).val()==questions[8].answer){
                    game.correct++;
                } else{
                    game.incorrect++;
                }
             });

			 $.each($("input[name='question-9']:checked"),function(){
                if($(this).val()==questions[9].answer){
                    game.correct++;
                } else{
                    game.incorrect++;
                }
             });




             this.result();
             },
             result: function(){
                 clearInterval(timer);
				 $("#subwrapper h2").remove();
				 $("#subwrapper").html("<h2> All done! </h2>");
                 $("#subwrapper").append("<h3>Correct Answers: " + this.correct + "</h3>");
                 $("#subwrapper").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
                 $("#subwrapper").append("<h3>Unanswered : "+(questions.length-(this.incorrect+this.correct))+"</h3>");
             }

    }