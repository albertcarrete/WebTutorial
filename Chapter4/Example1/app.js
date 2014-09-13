var main = function() {
	"use strict";

	$(".comment-input button").on("click",function(event){
		/* Creates a new paragraph element as a jQuery object */
		var $new_comment;

		if( $(".comment-input input").val() !== ""){
				$new_comment = $("<p>").text($(".comment-input input").val());
				$new_comment.hide();
				$(".comments").append($new_comment);	
				$new_comment.fadeIn();
				$(".comment-input input").val("");	// clear input
		}
	});
	$(".comment-input input").on("keypress", function(event){
		var $new_comment;

		/* below is a console log for determining which key
			applies to which code */
		// console.log("this is the keyCode" + event.keyCode); 
		if(event.keyCode === 13){
			if( $(".comment-input input").val() !== ""){
				$new_comment = $("<p>").text($(".comment-input input").val());
				$new_comment.hide();
				$(".comments").append($new_comment);	
				$new_comment.fadeIn();
				$(".comment-input input").val("");	// clear input
			}		
		}

	});
};
$(document).ready(main);