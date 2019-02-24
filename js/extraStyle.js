$(document).ready(function(){
	$("#slideImg").rotate({
		width:"100%",
		speed:6
		});
	$(".partners img").mouseenter( function(){
		$(this).animate({
			width:"140%",
			marginTop:"-50%",
			marginLeft:"-30%"
		});
	});
	$(".partners img").mouseleave( function(){
		$(this).animate({
			width:"100%",
			marginTop:"0%",
			marginLeft:"0%"
		});
	});
});
