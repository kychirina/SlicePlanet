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
	
	/* navigation*/

/*	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});*/

	$('.loaded__button-nav').click(function(){
		$(this).toggleClass('active'); 
		$('.loaded__menu').slideToggle();
		$('.b-link_menu__secondary,.b-link_menu__sub,.b-contact,.b-personal__product').hide();
		$('.b-link_menu__secondary>li:nth-of-type(4)').removeClass('active').css("background-color","transparent");
		/*$(".b-link_menu__secondary>li:nth-of-type(4) a img").css("transform","rotate(0deg)");*/ 
	});	

	$('.loaded__button-search,.b-button').click(function(){
		var wid = $(window).width(); 
		if(wid <= 550) {$('.loaded__search').slideToggle();}		 
	});

	$('.b-contact-button').click(function(){
		$('.b-contact').slideToggle(); 
	});	

	$('.b-product-button').click(function(){
		$('.b-personal__product').slideToggle(); 
	});	

	$('.b-link_menu:first-child').click(function(){
		$(this).toggleClass('active'), 
		$('.b-link_menu__secondary').slideToggle(); 
		$('.b-link_menu__sub').hide();
		$('.b-link_menu__secondary>li:nth-of-type(4)').removeClass('active').css("background-color","transparent");	
		return false;
	});
	
	$('.b-link_menu__secondary>li:nth-of-type(4)').click(function(){
		var b_link_menu_active = $('.b-link_menu__secondary>li:nth-of-type(4)').hasClass('active'); 
		if(b_link_menu_active==false){
			$(this).addClass('active').css("background-color","#e3e3e4");
			/*$(".b-link_menu__secondary>li:nth-of-type(4) a img").css("transform","rotate(-180deg)").css("transition","transform 0.2s linear 0.1s"); */
			$('.b-link_menu__sub').show("slide");} 
		else{
			$(this).removeClass('active').css("background-color","transparent");
			/*$(".b-link_menu__secondary>li:nth-of-type(4) a img").css("transform","rotate(0deg)").css("transition","transform 0.2s linear 0.1s");*/ 
			$('.b-link_menu__sub').hide("slide");}
		return false;				
	});
	
	/* components */
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margon  : 10,
			padding  : 10
		});
	};
	if($('.loaded__slaider').length) {
		$('.loaded__slaider').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
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
	};
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
	if(wid > 768 ) { 
		$("nav").css('width','auto');}
	if((wid <= 768 )&&(wid > 550)) { 
		$("nav").width(100+'%');
		$(".b-slaider img").attr("src","img/picter-1-768.jpg");}
	if(wid <= 550 ) { 
		$(".b-slaider img").attr("src","img/picter-1-320.jpg");
	   	if (w!=wid){
        	$("nav").width(wid);
          	var w = $("nav").width();}}	
	
	setTimeout(function(){resize();},50);
});


