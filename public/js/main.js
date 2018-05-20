$(document).ready(function(){

	//set for element with id="wrapper" attribute value for 'display' depending on browser
	if ($.browser.msie  && parseInt($.browser.version) <= 8) {
 		$(function() {$("#wrapper").css("display", "block");
    			}); 
	} else {
 		$(function() {$("#wrapper").css("display", "none");
    			});
	}

}
