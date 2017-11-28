$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	
	/* NAVIGATION*/

	$('.top__nav_button-hide').click(function(){
		$(this).toggleClass('active'); 
		$('.header__bottom').slideToggle();
		$('.nav__link_secondary,.nav__link_sub,.info__contact,.info__working-hide').hide();
		$('.nav__link_secondary>li:nth-of-type(4)').removeClass('active').css("background-color","transparent");
		/*$(".nav__link_secondary>li:nth-of-type(4) a img").css("transform","rotate(0deg)");*/ 
	});	

	$('.bottom__nav_button-hide').click(function(){		
		$(this).toggleClass('active'); 
		$('.nav-hide').slideToggle();		
	});	

	$('.top__search_button-hide,.search__button').click(function(){
		var wid = $(window).width(); 
		if(wid <= 550) {$('.top__search').slideToggle();}		 
	});

	$('.info__contact_button-hide').click(function(){
		$('.info__contact').slideToggle(); 
	});	

	$('.working__product_button-hide').click(function(){
		$('.info__working-hide').slideToggle(); 
	});	

	$('.nav__link:first-child').click(function(){
		$(this).toggleClass('active'), 
		$('.nav__link_secondary').slideToggle(); 
		$('.nav__link_sub').hide();
		$('.nav__link_secondary>li:nth-of-type(4)').removeClass('active').css("background-color","transparent");	
		return false;
	});
	
	$('.nav__link_secondary>li:nth-of-type(4)').click(function(){
		var b_link_menu_active = $('.nav__link_secondary>li:nth-of-type(4)').hasClass('active'); 
		if(b_link_menu_active==false){
			$(this).addClass('active').css("background-color","#e3e3e4");
			/*$(".nav__link_secondary>li:nth-of-type(4) a img").css("transform","rotate(-180deg)").css("transition","transform 0.2s linear 0.1s"); */
			$('.nav__link_sub').show("slide");} 
		else{
			$(this).removeClass('active').css("background-color","transparent");
			/*$(".nav__link_secondary>li:nth-of-type(4) a img").css("transform","rotate(0deg)").css("transition","transform 0.2s linear 0.1s");*/ 
			$('.nav__link_sub').hide("slide");}
		return false;				
	});
	
	/* COMPONENTS */
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margon  : 10,
			padding  : 10
		});
	};
	
	/* slaider */
	
	$('.slaider').slick({
		dots: true,
		infinite: true,
		speed: 1000,
		//autoplay: true,
		//autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
		//adaptiveHeight: true,
		responsive: [
		{
			breakpoint: 769,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false
			}
		}/*,
				{
				  breakpoint: 600,
				  settings: "unslick"
				}*/				
			]
	});
	
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	/* components */
	
});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);


$(window).load(function resize(){
	var wid = $(window).width();
	var w = $('nav').width();  
	/* nav width */
	if(wid > 768) { 
		$("nav").css('width','auto');}
	if(wid <= 768 ){ 
		$("nav").width(100+'%');}

	if((wid <= 700)&&(wid > 380)) { 
			$('.nav__link-hide-6').show();
			$('.nav__link_6').hide();
		}else{
			$('.nav__link-hide-6').hide();
			$('.nav__link_6').show();}
	if((wid < 640)&&(wid > 380)) { 
			$('.nav__link-hide-5').show();
			$('.nav__link_5').hide();
		}else{
			$('.nav__link-hide-5').hide();
			$('.nav__link_5').show();}
	if((wid < 540)&&(wid > 380)) { 
			$('.nav__link-hide-4').show();
			$('.nav__link_4').hide();
		}else{
			$('.nav__link-hide-4').hide();
			$('.nav__link_4').show();}
	if((wid < 405)&&(wid > 380)) { 
			$('.nav__link-hide-3').show();
			$('.nav__link_3').hide();
		}else{
			$('.nav__link-hide-3').hide();
			$('.nav__link_3').show();}
	/* slaider img*/
	if(wid > 768 ) { 
		$(".slaider__item img").attr("src","img/picter-1.jpg");}			
	if((wid <= 768 )&&(wid > 565)) { 
		$(".slaider__item img").attr("src","img/picter-1-768.jpg");}
	if(wid <= 565 ) { 
		$(".slaider__item img").attr("src","img/picter-1-320.jpg");}

	
	setTimeout(function(){resize();},50);
});


