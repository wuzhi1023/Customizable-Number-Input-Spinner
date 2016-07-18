/*------- Numeric Input Arrows --------*/
jQuery(function() {
	setInputArrows();

	// Handle ajax models
	$( document ).ajaxComplete(function() {
		setInputArrows();
	});
});


function setInputArrows(){
	$('input[type="number"]').each(function(){
		if(! $(this).hasClass('arrows_added')){
			addButton = $('<a class="input_arrow_add" href="#">&#8249;</a>').insertAfter($(this));
			minusButton = $('<a class="input_arrow_minus" href="#">&#8250;</a>').insertAfter($(this));
			$(addButton).click(function(e){
				e.preventDefault();
				inputBox = $($(this).prev().prev());
				max = inputBox.attr('max');
				step = inputBox.attr('step');
				value = inputBox.val();
				if(!value) value = 0;
				if (!step) step = 1;
				if (parseInt(value) + parseInt(step) <= max || !max)
					inputBox.val(parseInt(value) + parseInt(step));
				else inputBox.val(max);
			});
			$(minusButton).click(function(e){
				e.preventDefault();
				inputBox = $($(this).prev());
				min = inputBox.attr('min');
				step = inputBox.attr('step');
				value = inputBox.val();
				if(!value) value = 0;
				if (!step) step = 1;
				if (parseInt(value) - parseInt(step) >= min || !min)
					inputBox.val(parseInt(value) - parseInt(step));
				else inputBox.val(min);
			});
			$(this).addClass('arrows_added');
		}
	});
}