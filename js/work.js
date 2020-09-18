
$(function(){
	$('#content-box>div').hide();
	$('#content-box>div').eq(1).fadeIn();
	$('#tab-menu li a').eq(1).addClass('tab_color');

	$('#tab-menu li a').click(function(e){
		e.preventDefault();
		$('#tab-menu li a').removeClass('tab_color');
		$(this).addClass('tab_color');
		$('#content-box>div').hide();
		$('#' + $(this).attr('title')).fadeIn();
		$('#top-content a').attr
	});

	$('#scroll-top').click(function(){
		$('html').stop().animate({'scrollTop' : '0'},1000);
	});


/***************************************/

	function none(){
		$('.move').stop().css('display','none');
	}

	$('#work-content-top').hover(function(){
		if($(window).width()>1200){
			if($('.move').stop().css('display') === 'none'){
				$('.move').stop().css('display','block');
				$('.move').stop().animate({
					'top':'65%',
					},100);
			}else{
				$('.move').stop().animate({
					'top':'100%'
				},100).slideToggle();
			}
		}
	});

	/****************work스크롤*******************/
	$(window).on('scroll',function(){
		var scroll = $(this).scrollTop();
			if($(this).width()>1200){
				if(scroll>600){
					$('header').css({'background':'rgba(0,0,0,0.5)'})
				}else{
					$('header').css({'background':''})
				}
			}else if($(this).width()>700){
				if(scroll>400){
					$('header').css({'background':'rgba(0,0,0,0.5)'})
				}else{
					$('header').css({'background':''})
				}
			}else if($(this).width()>0){
				if(scroll>250){
					$('header').css({'background':'rgba(0,0,0,0.5)'})
				}else{
					$('header').css({'background':''})
				}
			}
	});




});
