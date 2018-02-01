$(document).ready(function(){

	 $('.js-Speak').click(function(){
		 var inputText = $('.js-text').val();
		 showBubble($('.js-text1').val() + $('.js-text2').val());
	 });

	 function showBubble(text) {
	 	$('.bubble').addClass('-visible');
	 	$('.bubble').text(text);
	 	setTimeout(function() {
	 		$('.bubble').removeClass('-visible')
	 	}, 2000);
	 }

});
