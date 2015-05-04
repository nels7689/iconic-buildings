$(document).ready(function() {
	
    $('#on').click(function() {
		$('#menu2').show('slide', {direction: 'right'}, 500);
	});

	$('#off').click(function() {
		$('#menu2').hide('slide', {direction: 'right'}, 500);
	});

});