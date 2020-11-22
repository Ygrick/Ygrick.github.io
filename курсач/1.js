$(document).ready(function(){
	$('.headrburger').click(function(event){
		$('.headrburger,.headrmenu, .contents').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
