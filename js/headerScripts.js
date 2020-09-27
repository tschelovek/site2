$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .nav').toggleClass('active');
        $('body').toggleClass('lock');
    })
})

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.header__body_top').addClass('shrink');
        $('.nav').addClass('shrink');
    } else {
        $('.header__body_top').removeClass('shrink');
        $('.nav').removeClass('shrink');
    }
});
