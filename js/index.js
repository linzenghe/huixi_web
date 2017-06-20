$(function(){	
	$('.navTwo span').click(function(){
		var marginLeft = $('.banner').css('margin-left');
		if(marginLeft == '0px'){
			var screenHeight = $(window).height();
			$('.navTwo ul').css('height',screenHeight);
			$('body').css('overflow-y','hidden');
			$('.banner').animate({marginLeft:-240},500);
			$('.partOne').animate({marginLeft:-240},500);
		}else{
			$('body').css('overflow-y','auto');
			$('.banner').animate({marginLeft:0},500);
			$('.partOne').animate({marginLeft:0},500);
		}
		
	});
	$('.navTwo ul li > a').click(function(){
		$('.navTwo ul li').find('dl').slideUp();
		$('.navTwo ul li').find('a').removeClass('current');
		$(this).addClass('current');
		if($(this).siblings('dl').css('display') == 'none')
			$(this).siblings('dl').slideDown();
	});
	$('.partThree dl dd').hover(function(){
		$(this).find('.hoverDiv').stop().animate({top:0},500);
	},function(){
		$(this).find('.hoverDiv').stop().animate({top:275},500);
	})

})
