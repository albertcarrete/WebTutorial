var main = function() {
	"use strict";

	$(".comment-input button").on("click",function(event){
		/* Creates a new paragraph element as a jQuery object */
		var $new_comment;

		if( $(".comment-input input").val() !== ""){
			$new_comment = $("<p>").text($(".comment-input input").val());
			$(".comments").append($new_comment);		
		}
	});
};
$(document).ready(main);