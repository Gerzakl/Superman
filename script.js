$(document).ready(function(){

	var heroSpeech = 'i am Barman';

	$('.js-hideshow').click(function(){
		$('.hero').toggleClass('-invisible');
	});

	$('.js-hello').click(function(){
		$('.bubble').toggleClass('-visible');
		$('.bubble').text(heroSpeech);
	});

});

