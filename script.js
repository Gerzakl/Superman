$(document).ready(function(){



 	$('.js-plus').click(function(){
 		showBubble(Number(getFirstWord()) + Number(getSecondWord()));
 	});
 	$('.js-minus').click(function(){
 		showBubble(Number(getFirstWord()) - Number(getSecondWord()));
 	});
 	$('.js-multiply').click(function(){
 		showBubble(Number(getFirstWord()) * Number(getSecondWord()));
 	});
 	$('.js-div').click(function(){
 		 if (checkInputData().isNumber) {
		 showBubble(Number(getFirstWord()) / Number(getSecondWord()));
		} else {
			if (checkInputData().isEmpty) {
				showBubble('Пустоши какие-то');
			} else {
				showBubble(getFirstWord()+' and '+getSecondWord());
			}
		}
 	});

 	// ====================================== //
 	// ====================================== //

    function checkInputData(){
    	if ($.isNumeric(getFirstWord()) && $.isNumeric(getSecondWord())) {
    		return{
    			isNumber: true
    		};

    	}else if (getFirstWord() === '' && getSecondWord() === '') {
    		return {
    			isNumber: false,
    			isEmpty: true
    		};
    	}else {
    		return{
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

});
