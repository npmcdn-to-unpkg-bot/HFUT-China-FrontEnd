var hfutSwiper = new Swiper('.HFUT-china-container', {
    pagination: '.swiper-pagination',
    loop:true,
    spaceBetween: 0,
    centeredSlides: true
});

$('.HFUT-Home').click(function(){
	hfutSwiper.slideTo(0, 1000, false);//切换到第一个slide，速度为1秒
});

$('.HFUT-Team').click(function(){
	hfutSwiper.slideTo(1, 1000, false);//切换到第一个slide，速度为1秒
});

$('.HFUT-Project').click(function(){
	hfutSwiper.slideTo(2, 1000, false);//切换到第一个slide，速度为1秒
});

$('.HFUT-Parts').click(function(){
	hfutSwiper.slideTo(3, 1000, false);//切换到第一个slide，速度为1秒
});

$('.HFUT-Safety').click(function(){
	hfutSwiper.slideTo(4, 1000, false);//切换到第一个slide，速度为1秒
});

$('.HFUT-Attributions').click(function(){
	hfutSwiper.slideTo(5, 1000, false);//切换到第一个slide，速度为1秒
});

$('.HFUT-Human').click(function(){
	hfutSwiper.slideTo(6, 1000, false);//切换到第一个slide，速度为1秒
});

$('.HFUT-Awards').click(function(){
	hfutSwiper.slideTo(7, 1000, false);//切换到第一个slide，速度为1秒
});

var team = new Swiper('.HFUT-china-team', {
    pagination: '.team-pagination',
    paginationClickable: true,
    direction: 'vertical',
    spaceBetween: 0,
    mousewheelControl: true
});

var project = new Swiper('.HFUT-china-project', {
    pagination: '.project-pagination',
    paginationClickable: true,
    direction: 'vertical',
    spaceBetween: 0,
    mousewheelControl: true
});

var project = new Swiper('.HFUT-china-parts', {
    pagination: '.parts-pagination',
    paginationClickable: true,
    direction: 'vertical',
    spaceBetween: 0,
    mousewheelControl: true
});

var hunmanPractice = new Swiper('.HFUT-china-hunman-practice', {
    pagination: '.hunman-practice-pagination',
    paginationClickable: true,
    direction: 'vertical',
    spaceBetween: 0,
    mousewheelControl: true
});

var awards = new Swiper('.HFUT-china-awards', {
    pagination: '.awards-pagination',
    paginationClickable: true,
    direction: 'vertical',
    spaceBetween: 0,
    mousewheelControl: true
});