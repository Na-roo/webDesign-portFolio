$(function(){
 var winHeight = $(window).innerHeight(),
     $section = $('section'),
     $header = $('header');
 
 $section.height(winHeight);
 $header.height(winHeight);
 
 $(window).on('resize', function(){
  var winHeight = $(window).outerHeight();
  
  $section.height(winHeight);
 });
 
 var $gnb = $header.find('#gnb'),
     $headerinner = $header.find('.inner'),
     $open = $('#open'),
     $close = $header.find('#close');
 
 $gnb.on('click', 'li', function(e){
  e.preventDefault();
  
  var winHeight = $(window).outerHeight(),
      index = $(this).index(),
      newTop = winHeight * index;
  
  $('html,body').stop().animate({
   scrollTop: newTop
  }, 1000, 'easeInSine');
  
  $header.removeClass('on');
 });
 
 $open.on('click', function(e){
  e.preventDefault();
  
  var winHeight = $(window).outerHeight(),
			   index = $section.index(),
		   	newTop = winHeight * index;
  
  $("#open").toggleClass("is-active");
  
  $header.stop().animate({
   scrollTop: newTop
  });
  
  $header.addClass('on', 100, function(){
   $gnb.stop().animate({
    'left': 0
   }, 800, function(){
    $headerinner.stop().animate({
     'width': '100%'
    }, 900);
    $("#open").removeClass("is-active")
   });
  });
 });
 
 $close.on('click', function(e){
  e.preventDefault();
  
  var winHeight = $(window).outerHeight(),
			   index = $section.index(),
		   	newTop = winHeight * index;
  
  $("#close").toggleClass("is-active");
  $header.stop().animate({
   scrollTop: newTop
  }, 1000);
  
  $headerinner.stop().animate({
   'width': 0
  }, 600, function(){
   $gnb.stop().animate({
    'left': '-40%'
   }, 800, function(){
    $header.removeClass('on');
    $("#close").removeClass("is-active")
   });
  });
 });
 
 $section.on('mousewheel',function(e,delta){
  if(delta > 0) {
   var up = $(this).prev().offset().top;
   
   $('html,body').stop().animate({
    scrollTop: up
   }, 800);
   
  }else if(delta < 0){
   var down = $(this).next().offset().top;
   $('html,body').stop().animate({
    scrollTop: down
   }, 800);
  }
 }); // scroll jqeury scroll 끝
 
	/* indi 테두리 활성화 */
 var $wrap = $(this),
     $indicator = $wrap.find('.indicator'),
     indicatorHTML = '',
     currentIndex = 0;
  
 $section.each(function(i){
  $(this).css({
   top: 100 * i + '%'
  });
  indicatorHTML += '<a href="#"></a>'
 });
 
 $indicator.html(indicatorHTML);
 
 $indicator.on('click','a',function(e){
  e.preventDefault();
  
  var winHeight = $(window).outerHeight(),
      index = $(this).index(),
      newTop = winHeight * index;

  $('html,body').stop().animate({
    scrollTop: newTop
  }, 1000);
 });
 
 $section.on('mousewheel',function(e,delta){
  if(delta > 0) {

   var up = $(this).prev().offset().top;
   
   $('html,body').stop().animate({
    scrollTop: up
   }, 1000);
			
     }else if(delta < 0){
      
   var down = $(this).next().offset().top;
   $('html,body').stop().animate({
    scrollTop: down
   }, 1000);
  }
 });
 
 $(window).on('scroll',function(){

  var winH = $(window).outerHeight(),
      scroll = Math.floor($(window).scrollTop()+winH/2),
      $menu = $indicator.find('a');

  for(var i = 0; i < 4; i++){
   if(scroll >= winH*i && scroll < winH*(i+1)){
    $menu.removeClass('on');
    $menu.eq(i).addClass('on');
   }
  }
 });
 
 
	$(window).on('scroll', function () {
		var winH = $(window).outerHeight(),
			   scroll = Math.floor($(window).scrollTop() + winH / 2),
			   $menu = $('header .inner #gnb li');

		for (var i = 0; i < 4; i++) {
			if (scroll >= winH * i && scroll < winH * (i + 1)) {
				$menu.removeClass('on');
				$menu.eq(i).addClass('on');
			}
		}

	});

 
	$(window).on('scroll', function () {

		var winH = $(window).outerHeight(),
			   scroll = Math.floor($(window).scrollTop() + winH / 2);
  
		if (scroll >= winH * 1 && scroll < winH * 2) {
			var $section2 = $('#contents section:nth-child(2)'),
				$section2h1 = $section2.find('h1'),
				$profile = $section2.find('.profile'),
				$section2h1strong = $section2h1.find('strong'),
				$abg = $section2.find('.abg'),
				$abgp = $abg.find('p'),
				$abgul = $abg.find('ul');
			
			$section2h1.each(function () {

				
				$profile.stop().animate({
					'left': '30%',
					'opacity': '1'
				}, 1000, function () {
					$abg.stop().animate({
						'left': '80%',
						'opacity': '1'
					}, 1000, function () {
						$abgp.stop().animate({
							'width': '100%'
						}, 1000, function () {
							$abgul.stop().animate({
								'opacity': '1'
							});

						});
					});
				});



			});
		}
  
		if (scroll >= winH * 3 && scroll < winH * 4) {
			var $section4 = $('#contents section:nth-child(4)'),
			   	$section4p1 = $('#contents section:nth-child(4) p:nth-child(1)'),
			   	$contact = $section4.find('.contact'),
			   	$section4p2 = $('#contents section:nth-child(4) p:nth-child(2)'),
				   $section4p1strong = $section4p1.find('strong'),
				   $table = $contact.find('table'),
			   	$tableinput = $table.find('input'),
				   $tablebutton = $table.find('button');
   
   $section4p1.each(function(){
    $(this).stop().animate({
     'width': '50%'
    }, 1000, function(){
     $section4p2.stop().animate({
      'width': '30.1%'
     }, 1000, function(){
      $section4p1strong.stop().animate({
       'opacity': '1'
      }, 1000, function(){
       $contact.stop().animate({
        'width' : '30%'
       }, 1000);
       $tableinput.stop().animate({
        'opacity': '1'
       }, 1000);
       $tablebutton.stop().animate({
        'opacity': '1'
       }, 1000);
      });
     });
    });
   });
   
		}

	});

	$('#arrow').on('click', function () {
		$(this).toggleClass('is-active');

		if ($(this).hasClass('is-active')) {
			$('footer').stop().animate({
				'margin-top': 0
			}, 800, 'easeInSine');
			$('html,body').stop().animate({
				scrollTop: $('footer').offset().top
			}, 800, 'easeInSine');
		} else {
			$('footer').stop().animate({
				'margin-top': '-300px'
			}, 800, 'easeInSine');

		}


	});

	$(".hover").mouseleave(
		function () {
			$(this).removeClass('hover');
		}
	);
 
 $(window).trigger('scroll');
 
});
