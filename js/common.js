$(document).ready(function() {

    //modal window
    $('.js-overlay-campaign').fadeIn();
    $('.js-overlay-campaign').addClass('disabled');
    $('.js-close-campaign').click(function() {
        $('.js-overlay-campaign').fadeOut();

    });
    $(document).mouseup(function (e) {
        var popup = $('.js-popup-campaign');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.js-overlay-campaign').fadeOut();

        }
    });
    $(window).on('load', function () {
        setTimeout(function(){
            if($('.js-overlay-campaign').hasClass('disabled')) {
                return false;
            } else {

                $(".js-overlay-campaign").fadeIn();
            }
        }, 10000);
    });



	$(".burger").click(function(){
		$(this).next().slideToggle();
	});

	$('.burger').click(function(){
		$(this).toggleClass('open');
	});
	

	$(".fa-angle-down").click(function(){
		$("html, body").animate({
			scrollTop: $("#s_about_us").offset().top
		}, 800);
	});

	$("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });
	$('.owl-testimon').owlCarousel({
		items: 1,
		dots: true,
		loop: true
	});

    $(".scrol").click(function(event){
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $("html, body").animate({
            scrollTop: top}, 1000);
    });

    //message after action form
    $( "#form" ).submit(function( event ) {
        $('.thank-you-message').css('display', 'block');
        this.reset();
        event.preventDefault();
    });


});