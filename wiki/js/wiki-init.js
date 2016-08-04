var hfutSwiper = new Swiper('.HFUT-china-container', {
    pagination: '.swiper-pagination',
    mousewheelControl: true,
    loop:true,
    spaceBetween: 0,
    centeredSlides: true
});

$('.HFUT-Home').click(function(){
	hfutSwiper.slideTo(1, 1000, false);
});

$('.HFUT-Team').click(function(){
	hfutSwiper.slideTo(2, 1000, false);
});

$('.HFUT-Project').click(function(){
	hfutSwiper.slideTo(3, 1000, false);
});

$('.HFUT-Parts').click(function(){
	hfutSwiper.slideTo(4, 1000, false);
});

$('.HFUT-Safety').click(function(){
	hfutSwiper.slideTo(5, 1000, false);
});

$('.HFUT-Attributions').click(function(){
	hfutSwiper.slideTo(6, 1000, false);
});

$('.HFUT-Human').click(function(){
	hfutSwiper.slideTo(7, 1000, false);
});

$('.HFUT-Awards').click(function(){
	hfutSwiper.slideTo(8, 1000, false);
});

$('.HFUT-aboutus').click(function(){
	hfutSwiper.slideTo(9, 1000, false);
});