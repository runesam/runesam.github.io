var $ = jQuery;
$(document).ready(function(){
    $('.zoomIn').on('click', function () {
        var dom = $('svg');
        var height = parseInt(dom.attr('height'), 10);
        var width = parseInt(dom.attr('width'), 10);
        dom.attr({ height: height + 500, width: width + 500 });
    });
    $('.zoomOut').on('click', function () {
        var dom = $('svg');
        var height = parseInt(dom.attr('height'), 10);
        var width = parseInt(dom.attr('width'), 10);
        dom.attr({ height: height - 500, width: width - 500 });
    });
    $('.goTo').on('click', function() {
        var countryCode = $('input[name=\'code\']').val().toUpperCase();
        var color = $('input[name=\'color\']').val()
        var position = $('.' + countryCode).offset();
        if (!position) {
            alert('please select valid country code');
            return;
        }
        $('html, body').animate({
            scrollTop: position.top - (window.innerHeight / 2),
            scrollLeft: position.left - window.innerWidth / 2
        }, 1000);
        $('.' + countryCode).css('fill', color);
    });
    $('.resetColors').on('click', function() {
        $('.country').map(function(value, key) {
            $(this).css('fill', 'green');
        });
    });
});
