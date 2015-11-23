//console.log("hello", $.fn.jquery);

$(document).ready(function () {
	var bubble = function (event) {
		//console.log(event.clientX, event.clientY);
		var $b = $('<div/>').addClass('bubble');
		$b.css ({
			left: event.clientX,
			top: event.clientY
		});

		$('body').append($b);

		// Clean up after ourselves
		setTimeout(function(){
			// $b.fadeOut();		//bubble fade out
			$b.animate({		//This animate is doing three things: 1)push bubble to the top, 2) duration: 2 second, 3) remove bubble
				top: -1000	//Dissappear off the top of the screen
			}, 2000, function () {
				$b.remove();
			});
			/*
			setTimeout(function () {	//Remove bubble after 2 second
				$b.remove();
			}, 2000)
			*/
		}, 1400);
	};
 
	$(window).on('mousemove', bubble);
});