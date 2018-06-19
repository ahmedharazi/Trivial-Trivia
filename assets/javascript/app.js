$("#start").on('click',function(){
    game.start();
})


$(document).on('click','#end',function(){
	game.done();
})
var questions = [{

        question: "What is the Capital of Italy?", 
		choice: ["Sana'a", "Rome", "Cairo", "Madrid"],
		answer: 1,
		photo: "assets/images/rome.jpg"
	 },
	 {
	 	question: "What is the Capital of Greece?", 
		choice: ["Athens", "Seoul", "Lisbon", "Rome"],
		answer: 0,
		photo: "assets/images/athens.jpg"
	 }, 
	 {
	 	question: "What is the Capital of Iraq?", 
		choice: ["Dubai", "Jeddah", "Baghdad", "Tahran" ],
		answer: 2,
		photo: "assets/images/Baghdad.jpg"
	}, 
	{
		question: "What is the Capital of Egypt?", 
		choice: ["Hanoi", "Suva", "Cairo", "Madrid" ],
		answer: 2,
		photo: "assets/images/cairo.jpg"
	}, 
	{
		question: "What is the Capital of United State?", 
		choice: ["Stockholm", "Kingston", "Seoul", "DC" ],
		answer: 3,
		photo: "assets/images/london.jpg"
	}, 
	{
		question: "What is the Capital of Spain?", 
		choice: ["Caracas", "Madrid", "Athens", "Dublin" ],
		answer: 1,
		photo: "assets/images/madrid.jpg"
	}, 
	{
		question: "What is the Capital of France?", 
		choice: ["Caracas", "Paris", "Brussels", "Nairobi" ],
		answer: 1,
		photo: "assets/images/paris.jpg"
	}, 
	{
		question: "What is the Capital of Russia?", 
		choice: ["Moscow", "Athens", "Dublin", "Nairobi" ],
		answer: 0,
		photo: "assets/images/Moscow.jpg"
	}, 
	{
		question: "What is the Capital of Yemen?", 
		choice: ["Caracas", "Sana'a", "Brussels", "Bangkok" ],
		answer: 2,
		photo: "assets/images/bangkok.jpg"
	}, 
	{
		question: "What is the Capital of Japan?", 
		choice: ["Tokyo", "Kiev", "Cardiff", "Seoul" ],
		answer: 0,
		photo: "assets/images/tokyo.jpg"
    }];
    


    var game = {

        correct:0,
        incorrect: 0,
        counter: 20,
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
             $("#subwrapper").prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
             $("#start").remove();
			 for(var i = 0; i <questions.length; i++){
                $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
                for(var j=0; j <questions[i].choice.length; j++){
                	$("#subwrapper").append("<input type= 'radio' name='question-"+i+"' value='" + questions[i].choice[j] + "'>"+questions[i].choice[j]);

            	}
    
    
			 }
			 $("#subwrapper").append('<br> <button id="end">DONE</button>');
		
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
                 $("#subwrapper").append("<h3>Correct Answers: "+ this.correct + "</h3>");
                 $("#subwrapper").append("<h3>Incorrect Answers: "+ this.incorrect + "</h3>");
                 $("#subwrapper").append("<h3>Unanswered : "+(questions.length-(this.incorrect+this.correct))+"</h3>");
             }

    }