/*preloder*/
$(window).on('load', function () {
    $('#status').fadeOut();
    //    $('#preloader').delay(350).fadeOut('slow'); 
    $('#preloader').fadeOut();
});
/*------------------------------
           Team
================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        dots: false
    });
});
/*------------------------------
           Progress Bars
================================*/
$(function () {

    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        })
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });


});