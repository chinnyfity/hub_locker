$(document).ready(function() {
	"use strict";
    
/*==================================
    * Author        : "HelloXpert"
    * Template Name : Charity | HTML Template
    * Version       : 1.0
==================================== */
    
/*=========== TABLE OF CONTENTS ===========

	01. fixed nav
	02. owl carousel slider (#owl-demoabp)
	03. owl carousel slider (#owl-demoabp1)
	04. owl carousel slider (#owl-demoh6)
	05. owl carousel slider (#owl-demoevp)
	06. owl carousel slider (#owl-demoop)
	07. owl carousel slider (#owl-demoh5)
	08. owl carousel slider (#owl-demo1)
	09. owl carousel slider (#owl-demo2)
	10. owl carousel slider (#owl-demo3)
	11. owl carousel slider (#owl-demo4)
	12. owl carousel slider (#owl-demo5)
	13. tabs
	14. tab
	15. Flip Clock
	16. Counter Up
	17. progress vertical
	18. progress-bar and tooltip 
	19. home3 Masonery 
	20. home4 Masonery 
	21. One page Masonery 
	22. Home rev_slider_1079_1
	23. Home rev_slider_1079_2
	24. Home rev_slider_1079_22
	25. Home rev_slider_1079_1
	26. Home rev_slider_212_1
	27. Gmaps
	28. accordion
	29. fixed-nav
	30. myModal
	31. wow
	32. colorpicker-picker
	33. Quantity Buttons Shop
	34. jqzoom
	35. Pre-loader

======================================*/


	/*--------------------------------
	 	01. fixed nav
	---------------------------------*/ 
	var navbar = $('#main-nav');
	// navbar.affix({
	// 	offset: {
	// 		top: 2,
	// 	}
	// });
	
	navbar.on('affix.bs.affix', function () {
		if (!navbar.hasClass('affix')) {
			navbar.addClass('animated slideInDown');
		}
	});
	navbar.on('affixed-top.bs.affix', function () {
		navbar.removeClass('animated slideInDown');
	});
	
	
	/*--------------------------------
	 	02. owl carousel slider (#owl-demoabp)
	---------------------------------*/ 
	$("#owl-demoabp").owlCarousel({
		items: 3,
		autoplay: true,
		loop: true,
		dots:false,
		mouseDrag:false,
		nav: true,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		autoplaySpeed: 900,
        responsiveClass:true,
		responsive : {
			0 : {
				items: 1,
			},
			480 : {
				items: 2,
			},
			640 : {
				items: 3,
			},
		}
    });
	
	/*--------------------------------
	 	03. owl carousel slider (#owl-demoabp1)
	---------------------------------*/
	$("#owl-demoabp1").owlCarousel({
		items: 4,
		autoplay: true,
		loop: true,
		dots:false,
		mouseDrag:false,
		nav: true,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		autoplaySpeed: 1000,
        responsiveClass:true,
		responsive : {
			0 : {
				items: 1,
			},
			480 : {
				items: 2,
			},
			640 : {
				items: 3,
			},
			768 : {
				items: 4,
			},
		}
    });
	
	/*--------------------------------
	 	04. owl carousel slider (#owl-demoh6)
	---------------------------------*/
	$("#owl-demoh6").owlCarousel({
		items: 4,
		autoplay: true,
		loop: true,
		dots:false,
		mouseDrag:false,
		nav: true,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		autoplaySpeed: 1000,
        responsiveClass:true,
		responsive : {
			0 : {
				items: 1,
			},
			480 : {
				items: 2,
			},
			992 : {
				items: 3,
			},
			1200 : {
				items: 4,
			},
		}
    });
	
	/*--------------------------------
	 	05. owl carousel slider (#owl-demoevp)
	---------------------------------*/
	$("#owl-demoevp").owlCarousel({
		items: 2,
		autoplay: false,
		loop: true,
		dots:true,
		mouseDrag:false,
		nav:false,
		autoplaySpeed: 1000,
        responsiveClass:true,
		responsive : {
			0 : {
				items: 1,
			},
			768 : {
				items: 2,
			},
		}
    });
	
	/*--------------------------------
	 	06. owl carousel slider (#owl-demoop)
	---------------------------------*/
	$("#owl-demoop").owlCarousel({
		items: 3,
		autoplay: true,
		loop: true,
		dots:true,
		mouseDrag:false,
		nav:false,
		autoplaySpeed: 1000,
        responsiveClass:true,
		responsive : {
			0 : {
				items: 1,
			},
			640 : {
				items: 2,
			},
			992 : {
				items: 3,
			}
		}
    });
	
	/*--------------------------------
	 	07. owl carousel slider (#owl-demoh5)
	---------------------------------*/
	$("#owl-demoh5").owlCarousel({
		items: 3,
		autoplay: true,
		loop: true,
		dots:true,
		mouseDrag:false,
		nav:false,
		autoplaySpeed: 1000,
        responsiveClass:true,
		responsive : {
			0 : {
				items: 1,
			},
			480 : {
				items: 2,
			},
			1024 : {
				items: 3,
			},
		}
    });
	
	/*--------------------------------
	 	08. owl carousel slider (#owl-demo1)
	---------------------------------*/
	$("#owl-demo1").owlCarousel({
		items: 3,
		autoplay: true,
		loop: true,
		dots:false,
		mouseDrag:false,
		nav: true,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        transitionStyle:"fade",
		animateIn: 'fadeIn',
		animateOut: 'fadeOutLeft',
		autoplaySpeed: 1000,
        responsiveClass:true,
		responsive : {
			0 : {
				items: 1,
			},
			640 : {
				items: 2,
			},
			992 : {
				items: 3,
			}
		}
    });
	
	/*--------------------------------
	 	09. owl carousel slider (#owl-demo2)
	---------------------------------*/
	$("#owl-demo2").owlCarousel({
		items: 4,
		autoplay: true,
		loop: true,
		dots:false,
		mouseDrag:false,
		nav: true,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        transitionStyle:"fade",
		animateIn: 'fadeIn',
		animateOut: 'fadeOutLeft',
		autoplaySpeed: 1000,
        responsiveClass:true,
		responsive : {
			0 : {
				items: 1,
			},
			640 : {
				items: 2,
			},
			992 : {
				items: 3,
			},
			1200 : {
				items: 4,
			},
		}
    });
	
	/*--------------------------------
	 	10. owl carousel slider (#owl-demo3)
	---------------------------------*/
	$("#owl-demo3").owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		dots:false,
		mouseDrag:false,
		nav: true,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        transitionStyle:"fade",
		animateIn: 'fadeIn',
		animateOut: 'fadeOutLeft',
		autoplaySpeed: 1000
    });
	
	/*--------------------------------
	 	11. owl carousel slider (#owl-demo4)
	---------------------------------*/
	$("#owl-demo4").owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		dots:false,
		mouseDrag:false,
		nav: true,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		autoplaySpeed: 1000
    });
	
	/*--------------------------------
	 	12. owl carousel slider (#owl-demo5)
	---------------------------------*/
	$("#owl-demo5").owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		dots:false,
		mouseDrag:false,
		nav: true,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		autoplaySpeed: 1000
    });
	
	/*--------------------------------
	 	13. tabs
	---------------------------------*/
	(function() {
		[].slice.call( document.querySelectorAll( '.tabs' ) ).forEach( function( el ) {
			new CBPFWTabs( el );
		});

	})();

	/*--------------------------------
	 	14. tab
	---------------------------------*/
	(function() {
		[].slice.call( document.querySelectorAll( '.tab' ) ).forEach( function( el ) {
			new CBPFWTabs( el );
		});

	})();

	/*--------------------------------
	 	15. Flip Clock
	---------------------------------*/
	var date = new Date(2025, 0, 5, 0, 0, 0, 0);
	var today = new Date();
	var dif = date.getTime() - today.getTime();
	var timeLeft = Math.abs(dif / 1000) / 60;

	var clock = $('.clock').FlipClock({
		autoStart: false,
		clockFace: 'DailyCounter',
		countdown: true
	});

	clock.setTime(timeLeft);
	clock.start(); 
	
	/*--------------------------------
	 	16. Counter Up
	---------------------------------*/
	$('.counter').counterUp({
		delay: 3,
		time: 1000
	});
	
	/*--------------------------------
	 	17. progress vertical
	---------------------------------*/
	  $(".pb-box").each(function() { 
	  $('.progress.vertical .progress-bar').progressbar({transition_delay: 1500});
	});

	

	/*--------------------------------
	 	18. progress-bar and tooltip 
	---------------------------------*/
	var dataToggleTooTip = $('[data-toggle="tooltip"]');
	var progressBar = $(".progress-bar1");

	if (progressBar.length) {
		progressBar.appear(function () {
			dataToggleTooTip.tooltip({
				trigger: 'manual'
			}).tooltip('show');

			progressBar.each(function () {
				var each_bar_width = $(this).attr('aria-valuenow');
				$(this).width(each_bar_width + '%');
			});
		});
	}
	
	
	/*--------------------------------
	 	19. home3 Masonery 
	---------------------------------*/
	$(window).on('load', function(){
		if($('.charity-container').length){
			var $container = $('.charity-container').isotope({
			    itemSelector: '.charity-item',
			    masonry: {
			        columnWidth: '.charity-sizer'
			    }
			});
		}
	});
	

	/*--------------------------------
	 	20. home4 Masonery 
	---------------------------------*/
	$(window).on('load', function(){
		if($('.charity4-container').length){
			var $container = $('.charity4-container').isotope({
			    itemSelector: '.charity-item',
			    masonry: {
			        columnWidth: '.charity-sizer'
			    }
			});
		}
	});
	//filtration
	
	
	/*--------------------------------
	 	22. Home rev_slider_1079_1
	---------------------------------*/
	var charity=jQuery;
	var revapi1079;
	if(charity("#rev_slider_1079_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_1079_1");
	}else{
		revapi1079 = charity("#rev_slider_1079_1").show().revolution({
			sliderType:"standard",
			jsFileLocation:"revolution/js/",
			sliderLayout:"auto",
			dottedOverlay:"none",
			delay:4000,
			navigation:{
				bullets: {
					enable:true,
					hide_onmobile:true,
					hide_under:600,
					style:"",
					hide_onleave:true,
					hide_delay:200,
					hide_delay_mobile:1200,
					direction:"vertical",
					h_align:"right",
					v_align:"center",
					h_offset:50,
					v_offset:10,
					space:5,
					tmp:'<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
				}
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1600,1024,778,480],
			gridheight:[800,600,500,400],
			lazyType:"none",
			parallax: {
				type:"mouse",
				origo:"slidercenter",
				speed:2000,
				levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
				type:"mouse",
			},
			shadow:0,
			spinner:"off",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			shuffle:"off",
			autoHeight:"off",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	
	}
	
	/*--------------------------------
	 	23. Home rev_slider_1079_2
	---------------------------------*/
	var charity=jQuery;
	var revapi1079;
	if(charity("#rev_slider_1079_2").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_1079_2");
	}else{
		revapi1079 = charity("#rev_slider_1079_2").show().revolution({
			sliderType:"standard",
			jsFileLocation:"revolution/js/",
			sliderLayout:"auto",
			dottedOverlay:"none",
			delay:4000,
			navigation:{
				bullets: {
					enable:true,
					hide_onmobile:true,
					hide_under:600,
					style:"",
					hide_onleave:true,
					hide_delay:200,
					hide_delay_mobile:1200,
					direction:"vertical",
					h_align:"right",
					v_align:"center",
					h_offset:50,
					v_offset:10,
					space:5,
					tmp:'<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
				}
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1600,1024,778,480],
			gridheight:[800,600,500,400],
			lazyType:"none",
			parallax: {
				type:"mouse",
				origo:"slidercenter",
				speed:2000,
				levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
				type:"mouse",
			},
			shadow:0,
			spinner:"off",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			shuffle:"off",
			autoHeight:"off",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
	
	/*--------------------------------
	 	24. Home rev_slider_1079_22
	---------------------------------*/
	var charity=jQuery;
	var revapi1079;
	if(charity("#rev_slider_1079_22").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_1079_22");
	}else{
		revapi1079 = charity("#rev_slider_1079_22").show().revolution({
			sliderType:"standard",
			jsFileLocation:"revolution/js/",
			sliderLayout:"auto",
			dottedOverlay:"none",
			delay:4000,
			navigation:{
				bullets: {
					enable:true,
					hide_onmobile:true,
					hide_under:600,
					style:"",
					hide_onleave:true,
					hide_delay:200,
					hide_delay_mobile:1200,
					direction:"vertical",
					h_align:"right",
					v_align:"center",
					h_offset:50,
					v_offset:10,
					space:5,
					tmp:'<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
				}
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1600,1024,778,480],
			gridheight:[800,600,500,400],
			lazyType:"none",
			parallax: {
				type:"mouse",
				origo:"slidercenter",
				speed:2000,
				levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
				type:"mouse",
			},
			shadow:0,
			spinner:"off",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			shuffle:"off",
			autoHeight:"off",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
	
	
	/*--------------------------------
	 	25. Home rev_slider_1079_1
	---------------------------------*/
	var charity=jQuery;
	var revapi1079;
	if(charity("#rev_slider_1079_3").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_1079_3");
	}else{
		revapi1079 = charity("#rev_slider_1079_3").show().revolution({
			sliderType:"standard",
			jsFileLocation:"revolution/js/",
			sliderLayout:"auto",
			dottedOverlay:"none",
			delay:8000,
			navigation:{
				bullets: {
					enable:true,
					hide_onmobile:true,
					hide_under:600,
					style:"",
					hide_onleave:true,
					hide_delay:200,
					hide_delay_mobile:1200,
					direction:"vertical",
					h_align:"right",
					v_align:"center",
					h_offset:50,
					v_offset:10,
					space:5,
					tmp:'<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
				}
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1600,1024,778,480],
			gridheight:[800,600,500,400],
			lazyType:"none",
			parallax: {
				type:"mouse",
				origo:"slidercenter",
				speed:2000,
				levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
				type:"mouse",
			},
			shadow:0,
			spinner:"off",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			shuffle:"off",
			autoHeight:"off",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
	
	
	/*--------------------------------
	 	26. Home rev_slider_212_1
	---------------------------------*/
	var revapi212,
	charity=jQuery;
	if(charity("#rev_slider_212_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_212_1");
	}else{
		revapi212 = charity("#rev_slider_212_1").show().revolution({
			sliderType:"standard",
			jsFileLocation:"../assets/js/",
			sliderLayout:"fullscreen",
			dottedOverlay:"none",
			delay:5000,
			navigation: {
				arrows: {
					style:"uranus",
					enable:true,
					hide_onmobile:false,
					hide_over:479,
					hide_onleave:false,
					tmp:'',
					left: {
						h_align:"left",
						v_align:"center",
						h_offset:0,
						v_offset:0
					},
					right: {
						h_align:"right",
						v_align:"center",
						h_offset:0,
						v_offset:0
					}
				}
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1600,1024,778,480],
			gridheight:[800,600,500,400],
			lazyType:"none",
			scrolleffect: {
				blur:"on",
				maxblur:"20",
				on_slidebg:"on",
				direction:"top",
				multiplicator:"2",
				multiplicator_layers:"2",
				tilt:"10",
				disable_on_mobile:"off",
			},
			parallax: {
				type:"scroll",
				origo:"slidercenter",
				speed:4000,
				speedbg:0,
				speedls:0,
				levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
			},
			shadow:0,
			spinner:"spinner3",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "60px",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
	
	/*--------------------------------
	 	27. Gmaps
	---------------------------------*/
	var map;
	$('.ev-map-display').each(function() {
		var element = $(this).attr('id');
		map = new GMaps({
		el: '#' + element,
		center: new google.maps.LatLng(23.6788817,88.1000581),
		zoom:4,
		scrollwheel: false,
		
		});
		map.addMarker({
		lat: 23.8073772,
		lng: 90.3956486,
			title: 'Dhaka',
			icon:'',
		   
		});
	});	
	
	/*--------------------------------
	 	28. accordion
	---------------------------------*/
	$('#accordion .collapse').on('shown.bs.collapse', function(){
	$(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
	}).on('hidden.bs.collapse', function(){
	$(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
	});

	/*--------------------------------
	 	29. fixed-nav
	---------------------------------*/
	$('#nav').onePageNav();
	$('#navs').onePageNav();
	
	
	/*--------------------------------
	 	31. wow
	---------------------------------*/
	new WOW().init();

	/*--------------------------------
	 	32. colorpicker-picker
	---------------------------------*/
	$('select[name="colorpicker-change-background-color"]').on('change', function() {
		$(document.body).css('background-color', $('select[name="colorpicker-change-background-color"]').val());
	});

	$('#init').on('click', function() {
		$('select[name="colorpicker-shortlist"]').simplecolorpicker();

		$('select[name="colorpicker-picker-shortlist"]').simplecolorpicker({picker: true, theme: 'glyphicons'});

	});
	// By default, activate simplecolorpicker plugin on HTML selects
	$('#init').trigger('click');

	/*----------------------------
		33. Quantity Buttons Shop
	------------------------------ */  
	$(".qtyplus").on("click", function(){
    var b = $(this).parents(".quantity-form").find("input.qty"),
            c = parseInt(b.val(), 10) + 1,
            d = parseInt(b.attr("max"), 10);
        d || (d = 9999999999), c <= d && (b.val(c), b.change())
	});
    $(".qtyminus").on("click", function(){
    	var b = $(this).parents(".quantity-form").find("input.qty"),
            c = parseInt(b.val(), 10) - 1,
            d = parseInt(b.attr("min"), 10);
        d || (d = 1), c >= d && (b.val(c), b.change())
    });
    
   	/*--------------------------------
	 	34. jqzoom
	---------------------------------*/
	$('.jqzoom').jqzoom({
		zoomType: 'innerzoom',
		preloadImages: false,
		alwaysOn:false
	});

	/*--------------------------------
	 	34.  Pre-loader
	---------------------------------*/
	$(window).on('load',function() {
		$("#spinningSquaresG1").delay(1000).fadeOut(500);
	});
	
});
