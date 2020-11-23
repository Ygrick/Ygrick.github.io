$(document).ready(function(){
	$('.stih').hide();
	$('.invisible').hide();

	$('.headrburger').click(function(event){
		$('.headrburger,.headrmenu, .contents').toggleClass('active');
		$('body').toggleClass('lock');
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	$( ".one.visible" ).click(function(){ // задаем функцию при нажатиии на элемент с классом hide
	    $( ".one.stih" ).show('slow');
	    $( ".one.invisible" ).show('slow');
	 });
	$( ".one.invisible" ).click(function(){ // задаем функцию при нажатиии на элемент с классом show
		$( ".one.invisible" ).hide('slow');
		$( ".one.stih" ).hide('slow'); 
	});

	$( ".two.visible" ).click(function(){ // задаем функцию при нажатиии на элемент с классом hide
	    $( ".two.stih" ).show('slow'); 
	    $( ".two.invisible" ).show('slow');
	 });
	$( ".two.invisible" ).click(function(){ // задаем функцию при нажатиии на элемент с классом show
		$( ".two.invisible" ).hide('slow');
		$( ".two.stih" ).hide('slow'); 
	});

	$( ".three.visible" ).click(function(){ // задаем функцию при нажатиии на элемент с классом hide
	    $( ".three.stih" ).show('slow'); 
	    $( ".three.invisible" ).show('slow');
	 });
	$( ".three.invisible" ).click(function(){ // задаем функцию при нажатиии на элемент с классом show
		$( ".three.invisible" ).hide('slow');
		$( ".three.stih" ).hide('slow');
	});

	$( ".four.visible" ).click(function(){ // задаем функцию при нажатиии на элемент с классом hide
	    $( ".four.stih" ).show('slow'); 
	    $( ".four.invisible" ).show('slow');
	 });
	$( ".four.invisible" ).click(function(){ 
		$( ".four.invisible" ).hide('slow');
		$( ".four.stih" ).hide('slow'); 
	});

});