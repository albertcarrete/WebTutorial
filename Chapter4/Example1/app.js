var main = function() {
	"use strict";

	$(".comment-input button").on("click",function(event){
		/* Creates a new paragraph element as a jQuery object */
		var $new_comment = $("<p>"),
		/* Changes the text content of the new paragraph element*/
		comment_text = $(".comment-input input").val();

		/* We can chain them both together 
			var $new_comment = $("<p>").text("this is a new comment");
		*/
		$new_comment.text(comment_text);

		/* Again,we can just chain all of these lines together
			var $new_comment = $("<p>").text($(".comment-input input").val());
		*/
		$(".comments").append($new_comment);
	});
};
$(document).ready(main);