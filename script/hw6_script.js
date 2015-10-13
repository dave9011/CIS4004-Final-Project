
window.onload = init;

function init(){

	var leftImage = document.getElementById("left_image");
	var centerImage = document.getElementById("center_image");
	var rightImage = document.getElementById("right_image");
	addEvent(leftImage, 'mouseover', showPopup);
	addEvent(centerImage, 'mouseover', showPopup);
	addEvent(rightImage, 'mouseover', showPopup);
	addEvent(leftImage, 'mouseout', hidePopup);
	addEvent(centerImage, 'mouseout', hidePopup);
	addEvent(rightImage, 'mouseout', hidePopup);
	
	var left_popup = document.getElementById("left_column_popup");
	var left_popup_p = document.getElementById("left_p");
	var left_popup_a = document.getElementById("left_a");
	addEvent(left_popup, 'mouseover', showPopup);
	addEvent(left_popup_p, 'mouseover', showPopup);
	addEvent(left_popup_a, 'mouseover', showPopup);
	addEvent(left_popup, 'mouseout', hidePopup);
	addEvent(left_popup_p, 'mouseout', hidePopup);
	addEvent(left_popup_a, 'mouseout', hidePopup);
	
	var center_popup = document.getElementById("center_column_popup");
	var center_popup_p = document.getElementById("center_p");
	var center_popup_a = document.getElementById("center_a");
	addEvent(center_popup, 'mouseover', showPopup);
	addEvent(center_popup_p, 'mouseover', showPopup);
	addEvent(center_popup_a, 'mouseover', showPopup);
	addEvent(center_popup, 'mouseout', hidePopup);
	addEvent(center_popup_p, 'mouseout', hidePopup);
	addEvent(center_popup_a, 'mouseout', hidePopup);
	
	var right_popup = document.getElementById("right_column_popup");
	var right_popup_p = document.getElementById("right_p");
	var right_popup_a = document.getElementById("right_a");
	addEvent(right_popup, 'mouseover', showPopup);
	addEvent(right_popup_p, 'mouseover', showPopup);
	addEvent(right_popup_a, 'mouseover', showPopup);
	addEvent(right_popup, 'mouseout', hidePopup);
	addEvent(right_popup_p, 'mouseout', hidePopup);
	addEvent(right_popup_a, 'mouseout', hidePopup);
	
}

function showPopup(){
	var target = event.target;
	if (event.target.id == "left_image"){
		document.getElementById("left_column_popup").style.visibility = 'visible';
	}
	else if (event.target.id == "center_image"){
		document.getElementById("center_column_popup").style.visibility = 'visible';
	}
	else if (event.target.id == "right_image"){
		document.getElementById("right_column_popup").style.visibility = 'visible';
	}
	//left column hover
	else if(event.target.id == "left_column_popup"){
		document.getElementById("left_column_popup").style.visibility = 'visible';
	}
	else if(event.target.id == "left_p"){
		document.getElementById("left_column_popup").style.visibility = 'visible';
	}
	else if(event.target.id == "left_a"){
		document.getElementById("left_column_popup").style.visibility = 'visible';
	}
	//center column hover
	else if(event.target.id == "center_column_popup"){
		document.getElementById("center_column_popup").style.visibility = 'visible';
	}
	else if(event.target.id == "center_p"){
		document.getElementById("center_column_popup").style.visibility = 'visible';
	}
	else if(event.target.id == "center_a"){
		document.getElementById("center_column_popup").style.visibility = 'visible';
	}
	//right column hover
	else if(event.target.id == "right_column_popup"){
		document.getElementById("right_column_popup").style.visibility = 'visible';
	}
	else if(event.target.id == "right_p"){
		document.getElementById("right_column_popup").style.visibility = 'visible';
	}
	else if(event.target.id == "right_a"){
		document.getElementById("right_column_popup").style.visibility = 'visible';
	}
}

function hidePopup(){
	var target = event.target;
	if (event.target.id == "left_image"){
		document.getElementById("left_column_popup").style.visibility = 'hidden';
	}
	else if (event.target.id == "center_image"){
		document.getElementById("center_column_popup").style.visibility = 'hidden';
	}
	else if (event.target.id == "right_image"){
		document.getElementById("right_column_popup").style.visibility = 'hidden';
	}
	//left column hover
	else if(event.target.id == "left_column_popup"){
		document.getElementById("left_column_popup").style.visibility = 'hidden';
	}
	else if(event.target.id == "left_p"){
		document.getElementById("left_column_popup").style.visibility = 'hidden';
	}
	else if(event.target.id == "left_a"){
		document.getElementById("left_column_popup").style.visibility = 'hidden';
	}
	//center column hover
	else if(event.target.id == "center_column_popup"){
		document.getElementById("center_column_popup").style.visibility = 'hidden';
	}
	else if(event.target.id == "center_p"){
		document.getElementById("center_column_popup").style.visibility = 'hidden';
	}
	else if(event.target.id == "center_a"){
		document.getElementById("center_column_popup").style.visibility = 'hidden';
	}
	//right column hover
	else if(event.target.id == "right_column_popup"){
		document.getElementById("right_column_popup").style.visibility = 'hidden';
	}
	else if(event.target.id == "right_p"){
		document.getElementById("right_column_popup").style.visibility = 'hidden';
	}
	else if(event.target.id == "right_a"){
		document.getElementById("right_column_popup").style.visibility = 'hidden';
	}
}

function addEvent( obj, type, fn ) {
	if ( obj.attachEvent ) {
		obj['e'+type+fn] = fn;
		obj[type+fn] = function(){ obj['e'+type+fn] ( window.event ); }
		obj.attachEvent( 'on'+type, obj[type+fn] );
	} 
	else{
		obj.addEventListener(type, fn, false);
	}
}

function removeEvent( obj, type, fn ) {
	if ( obj.detachEvent ) {
		obj['e'+type+fn] = fn;
		obj.detachEvent( 'on'+type, obj[type+fn] );
		obj[type+fn] = null;
	} 
	else{
		obj.removeListener(type, fn, false);
	}
}