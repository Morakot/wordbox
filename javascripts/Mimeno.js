$(function(){
	$("nav a").mouseenter(function(){
			$(this).animate({
				color:"#000"
			},200)	;
		});
		
		window.setTimeout(function(){
			$("#cover").fadeToggle(300,"swing");
		},2000);
});