

$(window).on('scroll', function(){
var nftexttop = $('.text-nfilms').offset().top;
var headertop = $('.menu').offset().top;


if(nftexttop < headertop){
    $('.text-nfilms').fadeOut(2000);
    $('.basline-nfilms').fadeOut(7000);
}else{
    $('.text-nfilms').fadeIn(2000);
    $('.basline-nfilms').fadeIn(2000);
        }
    });
var rellax = new Rellax(".rellax",{
    callback: function(position){
    }
});


//Structure to control 'MORE' button action
var counter = 0;


$('#abt-us').click(function(){
    $('html, body').animate({
        scrollTop: $('.abt-sec').offset().top},1000);
    });


$('.enquire_button').click(function(){
    $('html, body').animate({
        scrollTop: $('.cous-head').offset().top},3000);
    });

$('#gal').click(function(){
    $('.more-li-real').css("display", "none");
    $('.more-overlay1').css("display", "none");
    $('.more-overlay2').css("display", "none");
    counter = 0;
    $('html, body').animate({
        scrollTop: $('.abt-img').offset().top},3000);
    });

$('#con-us').click(function(){
    $('.more-li-real').css("display", "none");
    $('.more-overlay1').css("display", "none");
    $('.more-overlay2').css("display", "none");
    counter = 0;
    $('html, body').animate({
        scrollTop: $('.cous-head').offset().top},3000);
    });


$('#tesmon').click(function(){
    $('.more-li-real').css("display", "none");
    $('.more-overlay1').css("display", "none");
    $('.more-overlay2').css("display", "none");
    counter = 0;
    $('html, body').animate({
        scrollTop: $('.testimonials').offset().top},3000);
    });

    
$('.overlaycloseButton').click(function(){
    $('.overlayExcess').fadeOut(500);
});


$('.more-overlay1').click(function(){
    $('.more-li-real').css("display", "none");
    $('.more-overlay1').css("display", "none");
    $('.more-overlay2').css("display", "none");
    counter = 0;
});


$('.more-overlay2').click(function(){
    $('.more-li-real').css("display", "none");
    $('.more-overlay1').css("display", "none");
    $('.more-overlay2').css("display", "none");
    counter = 0;
});


$('.more-click-event').click(function(){
    if(counter == 0){
        $('.more-overlay1').css("display", "block");
        $('.more-li-real').css("display", "block");
        $('.more-overlay2').css("display", "block");
        counter = 1;
    }else{
        $('.more-overlay1').css("display", "none");
        $('.more-li-real').css("display", "none");
        $('.more-overlay2').css("display", "none");
        counter = 0;
    }
});