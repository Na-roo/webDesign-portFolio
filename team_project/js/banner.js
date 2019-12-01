$(function(){
 
 $('.banner').each(function(){
  //변수선언
  var $pic = $(this).find('img'),
      count = $pic.length,
      currentIndex = 0,
      sp = 1000;
  
  //첫번째 이미지 나타내기
  $pic.eq(currentIndex).fadeIn(sp);
  
  
  //반복실행(함수실행)
	 setInterval(slideShow, 3000)
  
  //함수만들기
  function slideShow() {
		var nextIndex = (currentIndex + 1) % count;
		
		$pic.eq(currentIndex).fadeOut(sp);
		$pic.eq(nextIndex).fadeIn(sp);
		
		currentIndex = nextIndex
	}
  
 });