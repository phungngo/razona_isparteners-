var isiPad = (navigator.userAgent.match(/iPad/i) != null);
var isIOS = (navigator.userAgent.match(/iPhone|iPad|iPod/i) != null);
var isiPhone = (navigator.userAgent.match(/iPhone/i) != null);
var isiPod = (navigator.userAgent.match(/iPod/i) != null);
var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
var isIphone = (navigator.userAgent.match(/iPhone/i) != null);

$(".recent_work .categories div").click(function () {
	var index = $(this).index()+1;
	$(".recent_work .categories_box").fadeIn();
	$(".recent_work .categories_box").css("visibility","visible");
	$(".recent_work .categories_box").html("<!--<div class='cat_close_out'><img src='images/btn_close.png'></div>--><div class='border_outline_recent' data-animation='bounceInUp' data-animation-duration='0.2s' data-animation-delay='0.2s' ><div id='box_inner' class='"+index+"'><!--<div class='cat_close_in'><img src='images/close_recent_popup.png'></div>--><div class='box_inner_left'><div class='cat_next'></div><div class='cat_prev'></div><div class='slide_images'><img src='images/popup1.jpg' id='1'><img src='images/popup2.jpg' id='2'><img src='images/popup3.jpg' id='3'><img src='images/popup4.jpg' id='4'><img src='images/popup5.jpg' id='5'><img src='images/popup6.jpg' id='6'><img src='images/popup7.jpg' id='7'></div></div><div class='box_inner_right'><h1>Project 1</h1><div class='project_link'><a href='http://www.dummylink1.com'>http://www.dummylink1.com</a><hr class='line_popup'></div><p class='text1'>This is dummy content. This is dummy content. This is dummy content. This is dummy content. This is dummy content. This is dummy content. This is dummy content. This is dummy content. This is dummy content. This is dummy content.</p><p class='text2'>This is dummy content. This is dummy content. This is dummy content. This is dummy content. This is dummy content. This is dummy content. This is dummy content. This is dummy content. This is dummy content. This is dummy content. </p></div></div></div>");
	
	$(".recent_work .categories_box .border_outline_recent").addClass("animated");
	$(".recent_work .categories_box .border_outline_recent").addClass("bounceInUp");
	
	if(index==1){
		$(".recent_work .categories_box #box_inner .box_inner_left #1").fadeIn(300);
		$(".recent_work .categories_box #box_inner .box_inner_right h1").html("Project 1");
		$(".recent_work .categories_box #box_inner .box_inner_right .project_link").html("<a href='http://www.dummylink1.com'>http://www.dummylink1.com</a>");
		$(".recent_work .categories_box #box_inner .box_inner_right p.text1").html("This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1.");	
		$(".recent_work .categories_box #box_inner .box_inner_right p.text2").html("This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1.");		
	}
	else if(index==2){
		$(".recent_work .categories_box #box_inner .box_inner_left #2").fadeIn(300);
		$(".recent_work .categories_box #box_inner .box_inner_right h1").html("Project 2");
		$(".recent_work .categories_box #box_inner .box_inner_right .project_link").html("<a href='http://www.dummylink2.com'>http://www.dummylink2.com</a>");
		$(".recent_work .categories_box #box_inner .box_inner_right p.text1").html("This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2.");	
		$(".recent_work .categories_box #box_inner .box_inner_right p.text2").html("This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2.");	
	}
	else if(index==3){
		$(".recent_work .categories_box #box_inner .box_inner_left #3").fadeIn(300);
		$(".recent_work .categories_box #box_inner .box_inner_right h1").html("Project 3");
		$(".recent_work .categories_box #box_inner .box_inner_right .project_link").html("<a href='http://www.dummylink3.com'>http://www.dummylink3.com</a>");
		$(".recent_work .categories_box #box_inner .box_inner_right p.text1").html("This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3.");	
		$(".recent_work .categories_box #box_inner .box_inner_right p.text2").html("This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3.");	
	}
	else if(index==4){
		$(".recent_work .categories_box #box_inner .box_inner_left #4").fadeIn(300);
		$(".recent_work .categories_box #box_inner .box_inner_right h1").html("Project 4");
		$(".recent_work .categories_box #box_inner .box_inner_right .project_link").html("<a href='http://www.dummylink4.com'>http://www.dummylink4.com</a>");
		$(".recent_work .categories_box #box_inner .box_inner_right p.text1").html("This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4.");	
		$(".recent_work .categories_box #box_inner .box_inner_right p.text2").html("This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4.");	
	}
	else if(index==5){
		$(".recent_work .categories_box #box_inner .box_inner_left #5").fadeIn(300);
		$(".recent_work .categories_box #box_inner .box_inner_right h1").html("Project 5");
		$(".recent_work .categories_box #box_inner .box_inner_right .project_link").html("<a href='http://www.dummylink5.com'>http://www.dummylink5.com</a>");
		$(".recent_work .categories_box #box_inner .box_inner_right p.text1").html("This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5.");	
		$(".recent_work .categories_box #box_inner .box_inner_right p.text2").html("This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5.");	
	}
	else if(index==6){
		$(".recent_work .categories_box #box_inner .box_inner_left #6").fadeIn(300);
		$(".recent_work .categories_box #box_inner .box_inner_right h1").html("Project 6");
		$(".recent_work .categories_box #box_inner .box_inner_right .project_link").html("<a href='http://www.dummylink6.com'>http://www.dummylink6.com</a>");
		$(".recent_work .categories_box #box_inner .box_inner_right p.text1").html("This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6.");	
		$(".recent_work .categories_box #box_inner .box_inner_right p.text2").html("This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6.");	
	}
	else if(index==7){
		$(".recent_work .categories_box #box_inner .box_inner_left #7").fadeIn(300);
		$(".recent_work .categories_box #box_inner .box_inner_right h1").html("Project 7");
		$(".recent_work .categories_box #box_inner .box_inner_right .project_link").html("<a href='http://www.dummylink7.com'>http://www.dummylink7.com</a>");
		$(".recent_work .categories_box #box_inner .box_inner_right p.text1").html("This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7.");	
		$(".recent_work .categories_box #box_inner .box_inner_right p.text2").html("This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7.");	
	}
	else if(index==8){
		$(".recent_work .categories_box #box_inner .box_inner_left #8").fadeIn(300);
		$(".recent_work .categories_box #box_inner .box_inner_right h1").html("Project 8");
		$(".recent_work .categories_box #box_inner .box_inner_right .project_link").html("<a href='http://www.dummylink8.com'>http://www.dummylink8.com</a>");
		$(".recent_work .categories_box #box_inner .box_inner_right p.text1").html("This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8.");	
		$(".recent_work .categories_box #box_inner .box_inner_right p.text2").html("This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8.");	
	}
	//$('body').css('overflow', 'hidden');
	recent_work_resize();
	$(".recent_work .categories_box div.cat_next, .recent_work .categories_box div.cat_prev").animate({'opacity':'0'},900,'linear').animate({'opacity':'1'},1200,'linear');		
	
			
});

function recent_work_resize(){
	var w_recent = document.documentElement.clientWidth;
	var h_recent = document.documentElement.clientHeight;
	var categories_box_margin_top = (document.documentElement.clientHeight-$(".recent_work .categories_box .border_outline_recent").height())/2;
	
		
	if(w_recent<=736){
		$("#box_inner").niceScroll({cursorborder:"",touchbehavior:false,cursorcolor:"#d82929F",boxzoom:false,cursorfixedheight: 50}); 
		$("#box_inner").getNiceScroll();	
		$("#box_inner").getNiceScroll().resize();	
		$("#box_inner").height();	
		if(w_recent<=320&&h_recent<=372){
			$(".recent_work .categories_box .nicescroll-rails").css("margin-top","30px");
			$(".recent_work .categories_box .border_outline_recent").css("margin-top","20px");	
		}
		else {
			$(".recent_work .categories_box .nicescroll-rails").css("margin-top",categories_box_margin_top+10);
			$(".recent_work .categories_box .border_outline_recent").css("margin-top",categories_box_margin_top);		
		}
	}
	
	$(".recent_work .categories_box .border_outline_recent").css("margin-top",categories_box_margin_top);	
}

$(".recent_work .categories div").click(function(e){
	
	var index = $(this).index()+1;
	
	function recent_popup(){
	$(".recent_work .categories_box #box_inner .box_inner_left #"+index).fadeOut(1000);		
	if(index==1){
		$(".recent_work .categories_box #box_inner .box_inner_left #1").fadeIn(300);
		$(".recent_work .categories_box #box_inner .box_inner_right h1").html("Project 1");
		$(".recent_work .categories_box #box_inner .box_inner_right .project_link").html("<a href='http://www.dummylink1.com'>http://www.dummylink1.com</a>");
		$(".recent_work .categories_box #box_inner .box_inner_right p.text1").html("This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1.");	
		$(".recent_work .categories_box #box_inner .box_inner_right p.text2").html("This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1. This is dummy content 1.");		
	}
	else if(index==2){
		$(".recent_work .categories_box #box_inner .box_inner_left #2").fadeIn(300);
		$(".recent_work .categories_box #box_inner .box_inner_right h1").html("Project 2");
		$(".recent_work .categories_box #box_inner .box_inner_right .project_link").html("<a href='http://www.dummylink2.com'>http://www.dummylink2.com</a>");
		$(".recent_work .categories_box #box_inner .box_inner_right p.text1").html("This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2.");	
		$(".recent_work .categories_box #box_inner .box_inner_right p.text2").html("This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2. This is dummy content 2.");	
	}
	else if(index==3){
		$(".recent_work .categories_box #box_inner .box_inner_left #3").fadeIn(300);
		$(".recent_work .categories_box #box_inner .box_inner_right h1").html("Project 3");
		$(".recent_work .categories_box #box_inner .box_inner_right .project_link").html("<a href='http://www.dummylink3.com'>http://www.dummylink3.com</a>");
		$(".recent_work .categories_box #box_inner .box_inner_right p.text1").html("This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3.");	
		$(".recent_work .categories_box #box_inner .box_inner_right p.text2").html("This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3. This is dummy content 3.");	
	}
	else if(index==4){
		$(".recent_work .categories_box #box_inner .box_inner_left #4").fadeIn(300);
		$(".recent_work .categories_box #box_inner .box_inner_right h1").html("Project 4");
		$(".recent_work .categories_box #box_inner .box_inner_right .project_link").html("<a href='http://www.dummylink4.com'>http://www.dummylink4.com</a>");
		$(".recent_work .categories_box #box_inner .box_inner_right p.text1").html("This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4.");	
		$(".recent_work .categories_box #box_inner .box_inner_right p.text2").html("This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4. This is dummy content 4.");	
	}
	else if(index==5){
		$(".recent_work .categories_box #box_inner .box_inner_left #5").fadeIn(300);
		$(".recent_work .categories_box #box_inner .box_inner_right h1").html("Project 5");
		$(".recent_work .categories_box #box_inner .box_inner_right .project_link").html("<a href='http://www.dummylink5.com'>http://www.dummylink5.com</a>");
		$(".recent_work .categories_box #box_inner .box_inner_right p.text1").html("This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5.");	
		$(".recent_work .categories_box #box_inner .box_inner_right p.text2").html("This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5. This is dummy content 5.");	
	}
	else if(index==6){
		$(".recent_work .categories_box #box_inner .box_inner_left #6").fadeIn(300);
		$(".recent_work .categories_box #box_inner .box_inner_right h1").html("Project 6");
		$(".recent_work .categories_box #box_inner .box_inner_right .project_link").html("<a href='http://www.dummylink6.com'>http://www.dummylink6.com</a>");
		$(".recent_work .categories_box #box_inner .box_inner_right p.text1").html("This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6.");	
		$(".recent_work .categories_box #box_inner .box_inner_right p.text2").html("This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6. This is dummy content 6.");	
	}
	else if(index==7){
		$(".recent_work .categories_box #box_inner .box_inner_left #7").fadeIn(300);
		$(".recent_work .categories_box #box_inner .box_inner_right h1").html("Project 7");
		$(".recent_work .categories_box #box_inner .box_inner_right .project_link").html("<a href='http://www.dummylink7.com'>http://www.dummylink7.com</a>");
		$(".recent_work .categories_box #box_inner .box_inner_right p.text1").html("This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7.");	
		$(".recent_work .categories_box #box_inner .box_inner_right p.text2").html("This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7. This is dummy content 7.");	
	}
	else if(index==8){
		$(".recent_work .categories_box #box_inner .box_inner_left #8").fadeIn(300);
		$(".recent_work .categories_box #box_inner .box_inner_right h1").html("Project 8");
		$(".recent_work .categories_box #box_inner .box_inner_right .project_link").html("<a href='http://www.dummylink8.com'>http://www.dummylink8.com</a>");
		$(".recent_work .categories_box #box_inner .box_inner_right p.text1").html("This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8.");	
		$(".recent_work .categories_box #box_inner .box_inner_right p.text2").html("This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8. This is dummy content 8.");	
	}
	
}
	function img_next(){
		$(".recent_work .categories_box #box_inner .box_inner_left #1").css("z-index","1");
		$(".recent_work .categories_box #box_inner .box_inner_left #2").css("z-index","2");
		$(".recent_work .categories_box #box_inner .box_inner_left #3").css("z-index","3");
		$(".recent_work .categories_box #box_inner .box_inner_left #4").css("z-index","4");
		$(".recent_work .categories_box #box_inner .box_inner_left #5").css("z-index","5");
		$(".recent_work .categories_box #box_inner .box_inner_left #6").css("z-index","6");
		$(".recent_work .categories_box #box_inner .box_inner_left #7").css("z-index","7");
		$(".recent_work .categories_box #box_inner .box_inner_left #8").css("z-index","8");
	}
	function img_prev(){
		$(".recent_work .categories_box #box_inner .box_inner_left #1").css("z-index","7");
		$(".recent_work .categories_box #box_inner .box_inner_left #2").css("z-index","6");
		$(".recent_work .categories_box #box_inner .box_inner_left #3").css("z-index","5");
		$(".recent_work .categories_box #box_inner .box_inner_left #4").css("z-index","4");
		$(".recent_work .categories_box #box_inner .box_inner_left #5").css("z-index","3");
		$(".recent_work .categories_box #box_inner .box_inner_left #6").css("z-index","2");
		$(".recent_work .categories_box #box_inner .box_inner_left #7").css("z-index","1");
		$(".recent_work .categories_box #box_inner .box_inner_left #8").css("z-index","0");
	}

	$(".recent_work .categories_box div.cat_next").click(function(){
		
		if(index<8&&index>0){
			index++;
			recent_popup();	
			img_next();
			$(".recent_work .categories_box #box_inner .box_inner_left img").fadeOut(1000);
			$(".recent_work .categories_box #box_inner .box_inner_left #"+index).hide().show("slide", { direction: "left",opacity:'linear' }, 300);	
		}
		/*else{	
			index--;	
			index=1;					
		}*/					
	});
	$(".recent_work .categories_box div.cat_next").bind('touchstart click', function(){
		if(index<8&&index>0){
			index++;
			recent_popup();	
			img_next();
			$(".recent_work .categories_box #box_inner .box_inner_left img").fadeOut(1000);
			$(".recent_work .categories_box #box_inner .box_inner_left #"+index).hide().show("slide", { direction: "left",opacity:'linear' }, 300);	
		}
	});
	
	$(".recent_work .categories_box div.cat_prev").click(function(){
		if(index>1){
			index--;
			recent_popup();
			img_prev();
			$(".recent_work .categories_box #box_inner .box_inner_left img").fadeOut(1000);
			$(".recent_work .categories_box #box_inner .box_inner_left #"+index).hide().show("slide", { direction: "right",opacity:'linear' }, 300);					
		}
						
		/*else {
			index = 9;
			index--;								
		}*/			
	});
	
	$(".recent_work .categories_box div.cat_prev").bind('touchstart click', function(){
		if(index>1){
			index--;
			recent_popup();
			img_prev();
			$(".recent_work .categories_box #box_inner .box_inner_left img").fadeOut(1000);
			$(".recent_work .categories_box #box_inner .box_inner_left #"+index).hide().show("slide", { direction: "right",opacity:'linear' }, 300);					
		}

	});
	
	
	
	e.stopPropagation();
	if(!isIOS||!isAndroid){
		$('body').bind({'mousewheel DOMMouseScroll': function(e) {
			e.preventDefault();
			e.stopPropagation();
		}
		})
	}	
	if(isiPad||isiPod){
		$('body').bind({'touchmove touchstart': function(e) {
			e.preventDefault();
			e.stopPropagation();
		}
		});
		$(".recent_work .categories_box .border_outline_recent").bind({'touchmove touchstart': function(e) {
			e.preventDefault();
			e.stopPropagation();
		}
		});
		//$(".recent_work .categories_box div.cat_next, .recent_work .categories_box div.cat_prev").unbind("touchmove touchstart");	
		
		$("body").on('click touchend', function (evt) {
			if($(evt.target).attr('class')== "categories_box"){
				$(".recent_work .categories_box").fadeOut("slow");	
				$(".recent_work .categories_box .border_outline_recent").removeClass("bounceInUp");
				$(".recent_work .categories_box .border_outline_recent").removeClass("animated");	
				$('body').unbind("touchmove touchstart");		
			}
			
		});
		
	}
	if(isiPhone){
		$('body').bind({'touchstart touchcancel touchend': function(e) {
			e.preventDefault();
			e.stopPropagation();
		}
		});
		$(".recent_work .categories_box .border_outline_recent").bind({'touchstart touchcancel touchend': function(e) {
			e.preventDefault();
			e.stopPropagation();
		}
		});

		$("body").on('click touchend', function (evt) {
			if($(evt.target).attr('class')== "categories_box"){
				$(".recent_work .categories_box").fadeOut("slow");	
				$(".recent_work .categories_box .border_outline_recent").removeClass("bounceInUp");
				$(".recent_work .categories_box .border_outline_recent").removeClass("animated");	
				$('body').unbind("touchstart touchcancel touchend");		
			}			
		});

	}
	else if(isAndroid){
		$('body').bind({'touchstart': function(e) {
			e.preventDefault();
			e.stopPropagation();
		}		
		});	
		$(".recent_work .categories_box .border_outline_recent").bind({'touchstart': function(e) {
			e.preventDefault();
			e.stopPropagation();
		}		
		});		
		$("body").on('click touchend', function (evt) {
			if($(evt.target).attr('class')== "categories_box"){
				$(".recent_work .categories_box").fadeOut("slow");	
				$(".recent_work .categories_box .border_outline_recent").removeClass("bounceInUp");
				$(".recent_work .categories_box .border_outline_recent").removeClass("animated");	
				$('body').unbind("touchmove touchstart");		
			}			
		});
	}
	else{
		$(document).click(function(e){
		if ($(e.target).attr('class') == 'categories_box'){
			$(".recent_work .categories_box").fadeOut("slow");			
			$(".recent_work .categories_box .border_outline_recent").removeClass("bounceInUp");
			$(".recent_work .categories_box .border_outline_recent").removeClass("animated");
			if(!isIOS){	
					$('body').unbind("mousewheel DOMMouseScroll");
			}						
		}
		});
	}
});

function scroll_img(){
	$(".h_group2 img").click(function(){
		$("html, body").stop().animate({scrollTop: $(".about").offset().top }, 500);
	});
	$(".about .group_diamond .diamond_none .img_bottom img").click(function(){
		$("html, body").stop().animate({scrollTop: $(".service").offset().top}, 500);
	});
	$(".s_group3 img").click(function(){
		$("html, body").stop().animate({scrollTop: $(".recent_work").offset().top}, 500);
	});
}

function contact_form(){
	margin_top_contain = (document.documentElement.clientHeight-$(".contact #contact_form .border_outline_contact").height())/2;
	$(".contact #contact_form .border_outline_contact").css("margin-top", margin_top_contain);
}

$(".join_team .button_join, .contact .contact_group .getintouch").click(function(e){
	e.stopPropagation();
	var w_window = document.documentElement.clientWidth;
	var h_window = document.documentElement.clientHeight;
	$(".contact #contact_form").height(document.documentElement.clientHeight);
	
	$(".contact #contact_form").css("display","block");
	$(".contact #contact_form form.form_success").css("display","none");
	$(".contact #contact_form form.contactabcform").css("display","block");
	$(".contact #contact_form .border_outline_contact").removeClass("border_outline_contact_new");	
	$(".contact #contact_form .contact_contain").removeClass("contact_contain_new");	
	$(".contact #contact_form").width($(".contact"));
	$(".contact #contact_form .border_outline_contact").addClass("animated");
	$(".contact #contact_form .border_outline_contact").addClass("bounceInUp");
	var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());	
    contact_form();
	
	if(!isIOS||!isAndroid){
	$('body').bind({'mousewheel DOMMouseScroll': function(e) {
        e.preventDefault();
        e.stopPropagation();
    }
	})
	}
	
	if(isiPad||isiPod){
		$(".contact #contact_form").height($('body').height());
		$('body').bind({'touchmove touchstart': function(e) {
			e.preventDefault();
			e.stopPropagation();			
		}
		});	
		$("nav,.contact #contact_form").bind({'touchmove touchstart': function(e) {
			e.preventDefault();
			e.stopPropagation();
		}
		});
		$('input,textarea').bind('touchmove touchstart', function(e){
			e.stopPropagation();					
		})
		.bind('mousedown', function(e){
			e.stopPropagation();
		});
		
		$("body").on('click touchend', function (evt) {
			if(evt.target.id == "contact_form"){
				$(".contact #contact_form").fadeOut("slow");
				$(".contact #contact_form .border_outline_contact").removeClass("bounceInUp");
				$(".contact #contact_form .border_outline_contact").removeClass("animated");
			}
			$('body').unbind("touchmove touchstart");
		});		
	}
	else if(isiPhone){		
		$(".contact #contact_form").height($('body').height());
		$('body').bind({'touchstart touchcancel touchend': function(e) {
				e.preventDefault();
				e.stopPropagation();
			}
			});
		$('input,textarea').bind('mousedown touchstart touchcancel touchend', function(e){
			 e.stopPropagation();
		})
				
		$("body").on('click touchend', function (evt) {
			if($(evt.target).attr('id')== "contact_form"){
				$(".contact #contact_form").fadeOut("slow");
				$(".contact #contact_form .border_outline_contact").removeClass("bounceInUp");
				$(".contact #contact_form .border_outline_contact").removeClass("animated");
				$('body').unbind("touchstart touchcancel touchend");		
			}			
		});
		
	}
	else if(isAndroid){
		$(".contact #contact_form").height(document.documentElement.clientHeight);
		$('body').bind({'touchstart': function(e) {
			e.preventDefault();
			e.stopPropagation();
		}		
		});	
		$('input,textarea').bind('touchstart', function(e){
			e.stopPropagation();
		})
		.bind('mousedown', function(e){
			e.stopPropagation();
		});	
			
		$("body").on('click touchend', function (evt) {
			if($(evt.target).attr('id')== "contact_form"){
				$(".contact #contact_form").fadeOut("slow");
				$(".contact #contact_form .border_outline_contact").removeClass("bounceInUp");
				$(".contact #contact_form .border_outline_contact").removeClass("animated");
				$('body').unbind("touchmove touchstart");		
			}			
		});
	}
	
	$("body").click(function(e){
            if(e.target.id == "contact_form")
            {
                $(".contact #contact_form").fadeOut("slow");
				$(".contact #contact_form .border_outline_contact").removeClass("bounceInUp");
				$(".contact #contact_form .border_outline_contact").removeClass("animated");
				if(!isIOS){	
					$('body').unbind("mousewheel DOMMouseScroll");
				}										
            }
    });
});	
	
/*$(".contact #contact_form .btn_close").click(function(){
	$(".contact #contact_form").fadeOut("slow");
	$("html, body").stop().animate({scrollTop: $(".contact").offset().top }, 500);
});*/	
function about_margin(){
	var about_w = document.documentElement.clientWidth;
	var about_h = document.documentElement.clientHeight;
	var margin_top_contain = (document.documentElement.clientHeight-$("#boxscroll .border_outer").height())/2+10;	

	if(about_w<=320&&about_h==372){
		$("#boxscroll .nicescroll-rails").css("margin-top", margin_top_contain+33);	
		$("#boxscroll .border_outer").css("margin-top", margin_top_contain+10);
	}
	else {
		$("#boxscroll .nicescroll-rails").css("margin-top", margin_top_contain+10);	
		$("#boxscroll .border_outer").css("margin-top", margin_top_contain);	
	}
}
$(".about .group_diamond .diamond_none .contain .detail").click(function(e){
	about_margin();
	e.stopPropagation();
	
	$('#boxscroll').css("display","block");	
	$('#boxscroll').css("visibility","visible");	
	$("#boxscroll .title_box, #boxscroll .bottom_box").css("display","block");
	$("#boxscroll").height($(document).height());	
	$("#boxscroll .border_outer").addClass("animated");
	$("#boxscroll .border_outer").addClass("bounceInUp");
	
	//$("html, body").stop().animate({scrollTop: $(".about").offset().top+129 }, 500);
		
	$(".scroll_box").getNiceScroll().resize();
	
	if(!isIOS||!isAndroid){
		$('body').bind({'mousewheel DOMMouseScroll': function(e) {
			e.preventDefault();
			e.stopPropagation();
		}
		})
	}	
	
	if(isiPad||isiPod){
		$('body').bind({'touchmove touchstart': function(e) {
			e.preventDefault();
			e.stopPropagation();
		}
		});
		$("#boxscroll .title_box, #boxscroll .bottom_box").bind({'touchmove touchstart': function(e) {
			e.preventDefault();
			e.stopPropagation();
		}
		});		

		
		$("body").on('click touchend', function (evt) {
				if(evt.target.id == "boxscroll")
				{
					$("#boxscroll .border_outer").removeClass("bounceInUp");
					$("#boxscroll .border_outer").removeClass("animated");
					$("#boxscroll").fadeOut("slow");	
					$('#boxscroll').css("visibility","hidden");	
					$("#boxscroll .title_box, #boxscroll .bottom_box").css("display","none");		
					$("#boxscroll").css("height","auto");								
				}
				$('body').unbind("touchmove touchstart");					
		});			
	}
	if(isiPhone){
		$('body').bind({'touchstart touchcancel touchend': function(e) {
			e.preventDefault();
			e.stopPropagation();
		}
		});
		$("#boxscroll .border_outer").bind({'touchstart touchcancel touchend': function(e) {
			e.preventDefault();
			e.stopPropagation();
		}
		});		

		
		$("body").on('click touchend', function (evt) {
				if(evt.target.id == "boxscroll")
				{
					$("#boxscroll .border_outer").removeClass("bounceInUp");
					$("#boxscroll .border_outer").removeClass("animated");
					$("#boxscroll").fadeOut("slow");	
					$('#boxscroll').css("visibility","hidden");	
					$("#boxscroll .title_box, #boxscroll .bottom_box").css("display","none");		
					$("#boxscroll").css("height","auto");	
					$('body').unbind("touchstart touchcancel touchend");								
				}								
		});			
	}
	else if(isAndroid){
		$('body').bind({'touchstart': function(e) {
			e.preventDefault();
			e.stopPropagation();
		}		
		});		
		$("body").on('click touchend', function (evt) {
			if($(evt.target).attr('id')== "boxscroll"){
				$("#boxscroll .border_outer").removeClass("animated");
				$("#boxscroll .border_outer").removeClass("bounceInUp");
				$("#boxscroll .border_outer").css("z-index","-1");
				$('#boxscroll').css("visibility","hidden");	
                $("#boxscroll").fadeOut("slow");	
				$("#boxscroll .title_box, #boxscroll .bottom_box").css("display","none");	
				$("#boxscroll").height($(document).height());
				$('body').unbind("touchmove touchstart");	
			}			
		});
	}
	else {
		
	$("body").click(function(e){
    	if($(e.target).attr('id') == "boxscroll")
            {
				$("#boxscroll .border_outer").removeClass("animated");
				$("#boxscroll .border_outer").removeClass("bounceInUp");
				$("#boxscroll .border_outer").css("z-index","-1");
				$('#boxscroll').css("visibility","hidden");	
                $("#boxscroll").fadeOut("slow");	
				$("#boxscroll .title_box, #boxscroll .bottom_box").css("display","none");	
				$("#boxscroll").height($(document).height());
				if(!isIOS){	
					$('body').unbind("mousewheel DOMMouseScroll");
				}	
				
            }
		
	});		
	}	
});


/*$("#boxscroll .btn_close").click(function(){
	$("#boxscroll").fadeOut("slow");
	$("#boxscroll").height($(document).height());	
	$("html, body").stop().animate({scrollTop: $(".about").offset().top+129 }, 500);	
});*/


////////////////////////////scroll top
$(function() {
	var topBtn = $('#page-top');	
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			topBtn.fadeIn();
			$("#page-top").css("bottom","10px");
		} 		
		else {
			topBtn.fadeOut();
		}
	});

    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
});

////////////////////////////toggle nav menu
function popup_menu(){
	var scrolled_val = $(document).scrollTop().valueOf();
	if(scrolled_val>=$(".home").height()+$(".about").height()+$(".service").height()){
		if($(".menu_popup").css("display")=="none"){
			$(".menu_popup").slideToggle(200);
			$(".icon").css("background","#2d3438");
			$(".top-menu,.mid-menu, .bottom-menu").css("background","#fff");	
			$("nav .menu div.text_menu").css("display","none");		
		}
		else {
			$(".icon").css("background","none");
			$(".top-menu,.mid-menu, .bottom-menu").css("background","#333");				
			$(".menu_popup").slideUp(200);
			$("nav .menu div.text_menu").css("display","block");
		}
	}
	else{
		if($(".menu_popup").css("display")=="none"){
			$(".menu_popup").slideToggle(200);
			$(".icon").css("background","#2d3438");
			$(".top-menu,.mid-menu, .bottom-menu").css("background","#fff");	
			$("nav .menu div.text_menu").css("display","none");		
		}
		else {
			$(".icon").css("background","none");
			$(".top-menu,.mid-menu, .bottom-menu").css("background","#fff");	
			$(".menu_popup").slideUp(200);
			$("nav .menu div.text_menu").css("display","block");
		}
	}
}

$("nav .menu").click(function(){
	popup_menu();
	$(".top-menu").toggleClass("top-animate");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");	
});

$(".menu_popup li a").click(function(){
	var index = $(this).parent().index();
	$(".top-menu").toggleClass("top-animate");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");	
	if(index==0||index==1||index==2){
		$(".icon").css("background","none");
		$(".top-menu,.mid-menu, .bottom-menu").css("background","#fff");
		$(".menu_popup").slideUp();
		$("nav .menu div.text_menu").css("display","block");
	}
	else{
		$(".icon").css("background","none");
		$(".top-menu,.mid-menu, .bottom-menu").css("background","#333");
		$(".menu_popup").slideUp();
		$("nav .menu div.text_menu").css("display","block");
	}
});	
////////////////////////////end toggle nav menu

isamac = false
if (navigator.platform.indexOf("Mac")>=0){
	isamac = true
	$(".about .group_diamond .diamond_none .title, .service .title, #boxscroll .title_inner, .recent_work .title, .our_team .title, .contact .title").css("padding","13px 0 2px 0");
	$(".join_team .button_join").css("padding","20px 0 14px 0");
	$(".contact .contact_group .contain .getintouch").css("padding","17px 0 11px 0");
	$(".about .group_diamond .diamond_none .contain .detail").css("padding","12px 14px 6px 14px");
	$(".our_team .group_diamond .diamond_none .charater_intro").css("padding-top","20px");
}
else if(isIOS||isAndroid){
	if(isiPad){
		$("html").addClass("iPad");  
	}
	else if(isAndroid){
		$("html").addClass("iAndroid");
	}
	$(".about .group_diamond .diamond_none .title, #boxscroll .title_inner, .service .title, .recent_work .title, .our_team .title, .contact .title").css("line-height","none");
	$(".about .group_diamond .diamond_none .title, #boxscroll .title_inner, .service .title, .recent_work .title, .our_team .title, .contact .title").css("padding","13px 0 2px 0");
	$(".about .group_diamond .diamond_none .contain .detail").css("padding","12px 14px 6px 14px");
	$(".about .group_diamond .diamond_none .contain .detail").css("line-height","none");
	$(".join_team .button_join").css("padding","20px 0 14px 0");
	$(".contact .contact_group .contain .getintouch").css("padding","17px 0 11px 0");
	$(".join_team .button_join").css("line-height","none");
	$(".contact .contact_group .contain .getintouch").css("line-height","none");
}
else {
	$(".about .group_diamond .diamond_none .title, #boxscroll .title_inner, .service .title, .recent_work .title, .our_team .title, .contact .title").css("line-height","60px");
	$(".join_team .button_join").css("line-height","54px");
	$(".contact .contact_group .contain .getintouch").css("line-height","50px");
	$(".about .group_diamond .diamond_none .contain .detail").css("line-height","34px");
}
/////////////////////////////scroll_menu_position()
function scroll_menu_position() {
	$(window).scroll( function() { 
	var scrolled_val = $(document).scrollTop().valueOf();
	if($(".menu_popup").css("display")=="block"){
		$(".top-menu,.mid-menu, .bottom-menu").css("background","#fff");
		$(".icon").css("background","#2d3438");
		if(scrolled_val<=$(".home").height()+$(".about").height()+$(".service").height()){
			$("nav .social_group .twitter img").attr("src","images/icon10.png");
			$("nav .social_group .fb img").attr("src","images/icon11.png");
			$("nav .menu div.text_menu").css("color","#fff");
		}
		else if(scrolled_val>=$(".home").height()+$(".about").height()+$(".service").height()+1){
			$("nav .social_group .twitter img").attr("src","images/icon10_active.png");
			$("nav .social_group .fb img").attr("src","images/icon11_active.png");
			$("nav .menu div.text_menu").css("color","#333");
		}
	}
	else{
		if(scrolled_val<=$(".home").height()+$(".about").height()+$(".service").height()){
			$(".icon").css("background","none");
			$(".top-menu,.mid-menu, .bottom-menu").css("background","#fff");
			$("nav .menu div.text_menu").css("color","#fff");
			$("nav .social_group .twitter img").attr("src","images/icon10.png");
			$("nav .social_group .fb img").attr("src","images/icon11.png");
		}
		else if(scrolled_val>=$(".home").height()+$(".about").height()+$(".service").height()+1){
			$(".top-menu,.mid-menu, .bottom-menu").css("background","#333");
			$(".icon").css("background","none");
			$("nav .menu div.text_menu").css("color","#333");
			$("nav .social_group .twitter img").attr("src","images/icon10_active.png");
			$("nav .social_group .fb img").attr("src","images/icon11_active.png");
		}		
	}	
	
	});
}
$(document).ready(function(){
	
	$('nav, .bg_threegroup, .recent_work, .our_team, .contact, footer').css("opacity","0");
	$("body").css("overflow","hidden");

	/*setTimeout(function () {
        $('.loading').css("display","block");	
		$('nav, .bg_threegroup, .recent_work, .our_team, .contact, footer').css("opacity","0");
		$("body").css("overflow","hidden");
    }, 2000);
	
	
	setTimeout(function () {
        //$('.loading').css("display","none");
		$("body").css("background","none");
		$('nav,.bg_threegroup, .recent_work, .our_team, .contact, footer').css("opacity","1");
		$("body").css({"overflow-x":"hidden !important","overflow-y":"scroll"});

    }, 2500);*/
		
	scroll_img();
		
	//height of home section 
	$(".home").height(document.documentElement.clientHeight);
	
	/*$(".home .h_group1 p.text1").stop().animate({'margin-top':'-160px','opacity':'0','height':'0px'},1300,'linear').animate({'margin-top':'0','opacity':'1','height':'100%'},1600,'linear');
	$(".h_group1 p.text2").stop().animate({'margin-top':'-20px','opacity':'0','height':'0px'},1300,'linear').animate({'margin-top':'-2px','opacity':'1','height':'100%'},1700,'linear');
	$(".h_group1 p.text3").stop().animate({'margin-top':'-27px','opacity':'0','height':'0px'},1500,'linear').animate({'margin-top':'27px','opacity':'1','height':'100%'},1800,'linear');
	
	var w_home = $(".home").width();
	if(w_home<=320){
		var h_group1 = document.documentElement.clientHeight*20/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").stop().animate({'bottom':'28%','opacity':'0'},1400,'linear').animate({'bottom':'8%','opacity':'1'},1400,'linear');	
	}
	else if(w_home<=360){
		var h_group1 = document.documentElement.clientHeight*20/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").stop().animate({'bottom':'28%','opacity':'0'},1400,'linear').animate({'bottom':'8%','opacity':'1'},1400,'linear');	
	}
	else if(w_home<=384){
		var h_group1 = document.documentElement.clientHeight*20/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").stop().animate({'bottom':'28%','opacity':'0'},1400,'linear').animate({'bottom':'8%','opacity':'1'},1400,'linear');	
	}
	if(w_home<=414){
		var h_group1 = document.documentElement.clientHeight*20/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").stop().animate({'bottom':'28%','opacity':'0'},1400,'linear').animate({'bottom':'8%','opacity':'1'},1400,'linear');	
	}
	else if(w_home<=736){
		var h_group1 = document.documentElement.clientHeight*22/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").stop().animate({'bottom':'28%','opacity':'0'},1400,'linear').animate({'bottom':'2%','opacity':'1'},1400,'linear');	
	}
	else if(w_home<=768){
		var h_group1 = document.documentElement.clientHeight*40/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").delay(1400).animate({'bottom':'28%','opacity':'0'},1400,'linear').animate({'bottom':'8%','opacity':'1'},1400,'linear');	
	}
	else if(w_home<=1024){
		var h_group1 = document.documentElement.clientHeight*40/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").delay(1400).animate({'bottom':'28%','opacity':'0'},1400,'linear').animate({'bottom':'8%','opacity':'1'},1400,'linear');	
	}
	else if(w_home<=1280){
		var h_group1 = document.documentElement.clientHeight*40/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").delay(1400).animate({'bottom':'28%','opacity':'0'},1400,'linear').animate({'bottom':'8%','opacity':'1'},1400,'linear');	
	}
	else {
		var h_group1 = document.documentElement.clientHeight*40/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").delay(400).animate({'bottom':'28%','opacity':'0'},1400,'linear').animate({'bottom':'8%','opacity':'1'},1400,'linear');	
	}*/
	
	var our_team_height = $(".our_team .img_top").height()+$(".our_team .title").height()+$(".our_team p").height()+$(".our_team .group_diamond").height()*2-140;
	$(".our_team").height(our_team_height);
	
	
	scroll_menu_position();	
	
	var window_width = $(".contact").width();
});

	
$(window).load(function(){
	$(".loading").fadeOut(); 
	$("body").css("background","none");
	$('nav,.bg_threegroup, .recent_work, .our_team, .contact, footer').css("opacity","1");
	$("body").css({"overflow-x":"hidden !important","overflow-y":"scroll"});
	scroll_img();
	
	/*$(".home").height(document.documentElement.clientHeight);
	
	$(".home .h_group1 p.text1").stop().animate({'margin-top':'-160px','opacity':'0','height':'0px'},1300,'linear').animate({'margin-top':'0','opacity':'1','height':'100%'},1600,'linear');
	$(".h_group1 p.text2").stop().animate({'margin-top':'-20px','opacity':'0','height':'0px'},1300,'linear').animate({'margin-top':'-2px','opacity':'1','height':'100%'},1700,'linear');
	$(".h_group1 p.text3").stop().animate({'margin-top':'-27px','opacity':'0','height':'0px'},1500,'linear').animate({'margin-top':'27px','opacity':'1','height':'100%'},1800,'linear');
	
	var w_home = $(".home").width();
	if(w_home<=320){
		var h_group1 = document.documentElement.clientHeight*20/100;
		$(".h_group1").css({"padding-top":h_group1});
	}
	else if(w_home<=360){
		var h_group1 = document.documentElement.clientHeight*20/100;
		$(".h_group1").css({"padding-top":h_group1});
	}
	else if(w_home<=384){
		var h_group1 = document.documentElement.clientHeight*20/100;
		$(".h_group1").css({"padding-top":h_group1});
	}
	else if(w_home<=414){
		var h_group1 = document.documentElement.clientHeight*20/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").css("bottom","8%");
	}
	else if(w_home<=736){
		var h_group1 = document.documentElement.clientHeight*22/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").stop().animate({'bottom':'28%','opacity':'0'},1400,'linear').animate({'bottom':'2%','opacity':'1'},1400,'linear');	
	}
	else if(w_home<=768){
		var h_group1 = document.documentElement.clientHeight*40/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").delay(400).animate({'bottom':'28%','opacity':'0'},1400,'linear').animate({'bottom':'8%','opacity':'1'},1400,'linear');	
	}
	else if(w_home<=1024){
		var h_group1 = document.documentElement.clientHeight*40/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").delay(400).animate({'bottom':'28%','opacity':'0'},1400,'linear').animate({'bottom':'8%','opacity':'1'},1400,'linear');	
	}
	else if(w_home<=1280){
		var h_group1 = document.documentElement.clientHeight*40/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").delay(400).animate({'bottom':'28%','opacity':'0'},1400,'linear').animate({'bottom':'8%','opacity':'1'},1400,'linear');	
	}
	else {
		var h_group1 = document.documentElement.clientHeight*40/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").css("bottom","8%");
	}*/
	
	$(".home").height(document.documentElement.clientHeight);
	
	$(".home .h_group1 p.text1").stop().animate({'margin-top':'-160px','opacity':'0','height':'0px'},300,'linear').animate({'margin-top':'0','opacity':'1','height':'100%'},600,'linear');
	$(".h_group1 p.text2").stop().animate({'margin-top':'-20px','opacity':'0','height':'0px'},300,'linear').animate({'margin-top':'-2px','opacity':'1','height':'100%'},700,'linear');
	$(".h_group1 p.text3").stop().animate({'margin-top':'-27px','opacity':'0','height':'0px'},500,'linear').animate({'margin-top':'27px','opacity':'1','height':'100%'},800,'linear');
	
	var w_home = $(".home").width();
	if(w_home<=320){
		var h_group1 = document.documentElement.clientHeight*20/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").stop().animate({'bottom':'28%','opacity':'0'},400,'linear').animate({'bottom':'8%','opacity':'1'},400,'linear');	
	}
	else if(w_home<=360){
		var h_group1 = document.documentElement.clientHeight*20/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").stop().animate({'bottom':'28%','opacity':'0'},400,'linear').animate({'bottom':'8%','opacity':'1'},400,'linear');	
	}
	else if(w_home<=384){
		var h_group1 = document.documentElement.clientHeight*20/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").stop().animate({'bottom':'28%','opacity':'0'},400,'linear').animate({'bottom':'8%','opacity':'1'},400,'linear');	
	}
	else if(w_home<=414){
		var h_group1 = document.documentElement.clientHeight*20/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").stop().animate({'bottom':'28%','opacity':'0'},400,'linear').animate({'bottom':'8%','opacity':'1'},400,'linear');	
	}
	else if(w_home<=480){
		var h_group1 = document.documentElement.clientHeight*22/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").stop().animate({'bottom':'28%','opacity':'0'},400,'linear').animate({'bottom':'2%','opacity':'1'},400,'linear');	
	}
	else if(w_home<=736){
		var h_group1 = document.documentElement.clientHeight*22/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").stop().animate({'bottom':'28%','opacity':'0'},400,'linear').animate({'bottom':'2%','opacity':'1'},400,'linear');	
	}
	else if(w_home<=768){
		var h_group1 = document.documentElement.clientHeight*40/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").delay(1400).animate({'bottom':'28%','opacity':'0'},400,'linear').animate({'bottom':'8%','opacity':'1'},400,'linear');	
	}
	else if(w_home<=1024){
		var h_group1 = document.documentElement.clientHeight*40/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").delay(1400).animate({'bottom':'28%','opacity':'0'},1400,'linear').animate({'bottom':'8%','opacity':'1'},1400,'linear');	
	}
	else if(w_home<=1280){
		var h_group1 = document.documentElement.clientHeight*40/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").delay(400).animate({'bottom':'28%','opacity':'0'},400,'linear').animate({'bottom':'8%','opacity':'1'},400,'linear');	
	}
	else {
		var h_group1 = document.documentElement.clientHeight*40/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").delay(400).animate({'bottom':'28%','opacity':'0'},400,'linear').animate({'bottom':'8%','opacity':'1'},400,'linear');	
	}
	
		
	var our_team_height = $(".our_team .img_top").height()+$(".our_team .title").height()+$(".our_team p").height()+$(".our_team .group_diamond").height()*2-140;
	$(".our_team").height(our_team_height);	
	
	scroll_menu_position();	
	recent_work_resize();		
	contact_form();
	about_margin();
	
});

$(window).resize(function(){
		
	//img_group_center();
	scroll_img();
	
	//height of home section 
	$(".home").height(document.documentElement.clientHeight);
	
	//padding-top.h_group1 
	
	var w_home = $(".home").width();
	
	if(w_home<=320){
		var h_group1 = document.documentElement.clientHeight*20/100;
		$(".h_group1").css({"padding-top":h_group1});
	}
	else if(w_home<=360){
		var h_group1 = document.documentElement.clientHeight*20/100;
		$(".h_group1").css({"padding-top":h_group1});
	}
	else if(w_home<=384){
		var h_group1 = document.documentElement.clientHeight*20/100;
		$(".h_group1").css({"padding-top":h_group1});
	}
	else if(w_home<=414){
		var h_group1 = document.documentElement.clientHeight*20/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").css("bottom","8%");
	}
	else if(w_home<=667){
		var h_group1 = document.documentElement.clientHeight*22/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").css("bottom","2%");
	}
	else if(w_home<=736){
		var h_group1 = document.documentElement.clientHeight*22/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").css("bottom","2%");	
	}
	else if(w_home<=768){
		var h_group1 = document.documentElement.clientHeight*40/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").css("bottom","8%");			
	}
	else if(w_home<=1024){
		var h_group1 = document.documentElement.clientHeight*40/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").css("bottom","8%");			
	}
	else if(w_home<=1280){
		var h_group1 = document.documentElement.clientHeight*40/100;
		$(".h_group1").css({"padding-top":h_group1});	
		$(".h_group2").css("bottom","8%");	
	}
	else {
		var h_group1 = document.documentElement.clientHeight*40/100;
		$(".h_group1").css({"padding-top":h_group1});
		$(".h_group2").css("bottom","8%");
	}
	
	
	var our_team_height = $(".our_team .img_top").height()+$(".our_team .title").height()+$(".our_team p").height()+$(".our_team .group_diamond").height()*2-140;
	$(".our_team").height(our_team_height);	
	
	scroll_menu_position();
	
	recent_work_resize();
	
	contact_form();
	about_margin();
	
	$("#boxscroll .scroll_box .title_box").width($("#boxscroll .scroll_box .scroll_contain").width());
	
});

