$(document).ready(function(){

	 $('.js-Speak').click(function(){
		 var inputText = $('.js-text').val();

		 if(inputText ===''){
		 	$('.bubble').addClass('-visible');
		 	$('.bubble').text('Ну что сказать...');
	 		setTimeout(function() {
	 			$('.bubble').removeClass('-visible')
	 		}, 2000);
		 } else{
		 	showBubble(inputText);
		 }

	 });

	 function showBubble(text) {
	 	$('.bubble').addClass('-visible');
	 	$('.bubble').text(text);
	 	setTimeout(function() {
	 		$('.bubble').removeClass('-visible')
	 	}, 2000);
	 }

});
