var main = function() {
	"use strict";

	var addCommentFromInputBox = function(){
		var $new_comment;

		if( $(".comment-input input").val() !== ""){
			/* Creates a new paragraph element as a jQuery object */

			$new_comment = $("<p>").text($(".comment-input input").val());
			$new_comment.hide();
			$(".comments").append($new_comment);	
			$new_comment.fadeIn();
			$(".comment-input input").val("");	// clear input
		}
	}

	$(".comment-input button").on("click",function(event){
		addCommentFromInputBox();
	});
	$(".comment-input input").on("keypress", function(event){
		/* below is a console log for determining which key
			applies to which code */
		// console.log("this is the keyCode" + event.keyCode); 
		if(event.keyCode === 13){
			addCommentFromInputBox();	
		}

	});
};

$(document).ready(main);