jQuery(
function($) {
	$(".swap").click(function (){
		$(".side").toggle();
		return false;
	});
	$(".1").click(function (){
		$('html,body').animate({
        scrollTop: $(".theme1").offset().top - 10},
        'slow');
	});
	$(".2").click(function (){
		$('html,body').animate({
        scrollTop: $(".theme2").offset().top + 30},
        'slow');
	});
	$(".3").click(function (){
		$('html,body').animate({
        scrollTop: $(".theme3").offset().top + 30},
        'slow');
	});
})
