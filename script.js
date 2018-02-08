$(document).ready(function(){

    let Hero = {
        name: 'Silvana',
        age: 67,
        job: 'DeathKnight',

        params: {
            height: 160,
            weight: 'unabled',
            gender: 'Female',
            race: 'Blood elf'
        },

        powers: {
            mainPower: 'Soulshadow',
            secondaryPower: 'Deatharrow'
        }    
    };

    $('.js-object').click(function(){
        showBubbleWithBlock('<div class="bubble-test">Hero name</div>');
    });

    let movies = ['banana', 'apple', 'door', 'orange'];

    $('.js-array').click(function(){
        movies.push(getSecondWord());
        showBubble(movies);
    });


    for (let i = 0; i < movies.length; i++) {
        $('.array-panel').append('<div class="test-item">' + movies[i] + '</div>');
    };












 	$('.js-plus').click(function(){
 		 if (checkInputData().isNumber) {
         showBubble(Number(getFirstWord()) + Number(getSecondWord()));
        } else {
            showStringData();
        }
 	});
 	$('.js-minus').click(function(){
 		 if (checkInputData().isNumber) {
         showBubble(Number(getFirstWord()) - Number(getSecondWord()));
        } else {
            showStringData();
        }
 	});
 	$('.js-multiply').click(function(){
 		 if (checkInputData().isNumber) {
         showBubble(Number(getFirstWord()) * Number(getSecondWord()));
        } else {
            showStringData();
        }
 	});
 	$('.js-div').click(function(){
        if (checkInputData().isNumber) {
            if(getSecondWord() =='0'){
                showBubble('Так вымерли динозавры!');
            } else {
                showBubble(getFirstWord() / getSecondWord());
            };
        }  else {
		 showStringData();
		}
 	});

 	// ====================================== //
 	// ====================================== //


    function showStringData(){
        if (checkInputData().isEmpty) {
                showBubble('Пустоши какие-то');
            } else {
                showBubble(getFirstWord()+' and '+getSecondWord());
            }
    }


    function checkInputData(){
    	if ($.isNumeric(getFirstWord()) && $.isNumeric(getSecondWord())) {
    		return{
    			isNumber: true
    		};

    	} else if (getFirstWord() === '' && getSecondWord() === '') {
    		return {
    			isNumber: false,
    			isEmpty: true
    		};
    	} else {
    		return {
    			isNumber: false,
    			isEmpty: false
    		};
    	}
    }



 	function getFirstWord(){
 		return $('.js-text1').val();
 	}

 	function getSecondWord(){
 		return $('.js-text2').val();
 	}

	 function showBubble(text) {
	 	$('.bubble').addClass('-visible');
	 	$('.bubble').text(text);
	 	setTimeout(function() {
	 		$('.bubble').removeClass('-visible')
	 	}, 5000);
	 }

     function showBubbleWithBlock(block) {
        $('.bubble').addClass('-visible');
        $('.bubble').append(block);
        setTimeout(function() {
            $('.bubble').removeClass('-visible')
        }, 5000);
     }
});

