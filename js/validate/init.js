$(function(){	
	$(".contactabcform").validate({
		rules: {
			name: {
				required: true,	
			},   			
			email: {
				required: true,
				email: true
			},
			msg:{
				required: true,
			},
		},
		messages: {
			name: {
				required: 'Your name please.',
				minlength: 'Minimum length: 3'
			},
			email: 'Invalid e-mail address',
			msg: {
				required: 'This field is required'
			},
			
		},
		success: function(label) {
			label.addClass('ok').text('OK');
			//label.parents('.control-label').removeClass('error');
			/*label.addClass('valid').removeClass('error');
			label.addClass('ok').text('OK!');*/
			
			/*if($("label[for='name']")){
				if(!$("label[for='name']").text('Your name please.'))	
				{
					$("label[for='name']").html("Ok");
					$("label[for='name']").css("color","#fff");						
				}
				else {
					
					$("label[for='name']").css("color","#ed1c24");	
				}				
			}
			
			if($("label[for='form_msg']")){
				$("label[for='form_msg']").html("Ok");
				$("label[for='form_msg']").css("color","#fff");	
			}
			if($("label[for='form_msg']")){
				$("label[for='form_msg']").html("Ok");
				$("label[for='form_msg']").css("color","#fff");	
			}
			//label.parent().removeClass('error').addClass('ok');
			//$('label').removeClass('error').addClass('ok');
			/*if(user_name=="true"){
				label.html('Ok').removeClass('error').addClass('ok');
			}
			else {
				label.html('');
			}*/
			
			/*setTimeout(function(){
				label.fadeOut(1500);
                label.remove();
			}, 1500)*/
		},
		error: function(label) {
			label.addClass('error').removeClass('ok');
		}
	});
});