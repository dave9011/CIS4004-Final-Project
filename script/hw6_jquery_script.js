$(document).ready(function() {
		
	//left column
	$("#left_image, #left_column_popup, #left_p, #left_a").mouseenter(function() {
		$("#left_image").css({"box-shadow":"5px 5px 5px 0px rgba(0,0,0,0.75)", 
			"-webkit-transform":"scale(1.02,1.02)", "-ms-transform":"scale(1.02,1.02)", "-moz-transform":"scale(1.02,1.02)", "-o-transform":"scale(1.02,1.02)"});
	});	
	$("#left_image, #left_column_popup").mouseleave(function() {
		$("#left_image").css({"box-shadow":"5px 5px 5px 0px rgba(0,0,0,0.0)", 
			"-webkit-transform":"scale(1,1)", "-ms-transform":"scale(1,1)", "-moz-transform":"scale(1,1)", "-o-transform":"scale(1,1)"});
	});	

	//center column
	$("#center_image, #center_column_popup, #center_p, #center_a").mouseenter(function() {
		$("#center_image").css({"box-shadow":"5px 5px 5px 0px rgba(0,0,0,0.75)",
			"-webkit-transform":"scale(1.02,1.02)", "-ms-transform":"scale(1.02,1.02)", "-moz-transform":"scale(1.02,1.02)", "-o-transform":"scale(1.02,1.02)"});
	});	
	$("#center_image, #center_column_popup").mouseleave(function() {
		$("#center_image").css({"box-shadow":"5px 5px 5px 0px rgba(0,0,0,0.0)", 
			"-webkit-transform":"scale(1,1)", "-ms-transform":"scale(1,1)", "-moz-transform":"scale(1,1)", "-o-transform":"scale(1,1)"});
	});

	//right column
	$("#right_image, #right_column_popup, #right_p, #right_a").mouseenter(function() {
		$("#right_image").css({"box-shadow":"5px 5px 5px 0px rgba(0,0,0,0.75)", 
			"-webkit-transform":"scale(1.02,1.02)", "-ms-transform":"scale(1.02,1.02)", "-moz-transform":"scale(1.02,1.02)", "-o-transform":"scale(1.02,1.02)"});
	});	
	$("#right_image, #right_column_popup").mouseleave(function() {
		$("#right_image").css({"box-shadow":"5px 5px 5px 0px rgba(0,0,0,0.0)",
			"-webkit-transform":"scale(1,1)", "-ms-transform":"scale(1,1)", "-moz-transform":"scale(1,1)", "-o-transform":"scale(1,1)"});
	});
			
});