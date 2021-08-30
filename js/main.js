$(function () {
    var $whysection = $('#whysection');
    var $offset = 300;
    var $whysectionOST = $whysection.offset().top - $offset;
    $(window).scroll(function () {
        if ($(this).scrollTop() > $whysectionOST) {
            $whysection.find('#why02').addClass('why02')
            $whysection.find('#why02').css('visibility', 'visible')
            $whysection.find('#why03').addClass('why03')
            $whysection.find('#why03').css('visibility', 'visible')
            $whysection.find('#why04').addClass('why04')
            $whysection.find('#why04').css('visibility', 'visible')
            $whysection.find('#why05').addClass('why05')
            $whysection.find('#why05').css('visibility', 'visible')
            $whysection.find('#why06').addClass('why06')
            $whysection.find('#why06').css('visibility', 'visible')
            $whysection.find('#why07').addClass('why07')
            $whysection.find('#why07').css('visibility', 'visible')
            $whysection.find('#why08').addClass('why08')
            $whysection.find('#why08').css('visibility', 'visible')
            $whysection.find('#why09').addClass('why09')
            $whysection.find('#why09').css('visibility', 'visible')
            $whysection.find('#why10').addClass('why10')
            $whysection.find('#why10').css('visibility', 'visible')
            $whysection.find('#why11').addClass('why11')
            $whysection.find('#why11').css('visibility', 'visible')
            $whysection.find('#why12').addClass('why12')
            $whysection.find('#why12').css('visibility', 'visible')
            $whysection.find('#why13').addClass('why13')
            $whysection.find('#why13').css('visibility', 'visible')
            $whysection.find('#why14').addClass('why14')
            $whysection.find('#why14').css('visibility', 'visible')
            $whysection.find('#why15').addClass('why15')
            $whysection.find('#why15').css('visibility', 'visible')
            $whysection.find('#why16').addClass('why16')
            $whysection.find('#why16').css('visibility', 'visible')
            ;
        };
    });

});
