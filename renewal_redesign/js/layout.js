$(function(){
 //변수선언
 var $sns = $('.sns');
 
 $sns.on('click', function(){
  $(this).fadeOut();
 });
 
 var $wrap = $('.wrap'),
     $btn = $wrap.find('#btn'),
     $nav = $wrap.find('nav'),
     $gnb = $wrap.find('#gnb'),
     $main = $wrap.find('main'),
     $section = $main.find('section');
 
 $btn.on('click', function(){
  $(this).fadeOut();
  $nav.addClass('on');
  $main.addClass('on');
  $sns.fadeOut();
 });

 
 $section.on('click', function(){
  $nav.removeClass('on');
  $main.removeClass('on');
  $btn.fadeIn();
  $sns.fadeIn();
 });
 
 $nav.on('click','li', function(){
  var i = $(this).index();
  
  $section.removeClass('on');
  $section.eq(i).addClass('on');
  
  $nav.find('li').removeClass('on');
  $(this).addClass('on');
  
  $btn.fadeIn();
  $nav.removeClass('on');
  $main.removeClass('on');
  
 });
 
});