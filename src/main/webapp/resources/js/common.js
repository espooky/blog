define(['jquery', 'ued', 'bgcanvas'], function($, ued) {

    var nav = function() {
        // var navName = ued.getStorage('nav');
        // var path = ued.hash().substr(1).split('.')[0];

        // $('.nav li').find('a').removeClass('cur');

        // $('.nav').find('li').each(function(index, el) {
        //     if($(this).attr('class') === path || $(this).attr('class') === navName) {
        //         $(this).find('a').addClass('cur');
        //         $(this).siblings().find('a').removeClass('cur');
        //     }
        // });

        // $('.top-link, .more').click(function() {
        //     $('.nav li').find('a').removeClass('cur');
        // });

        // $('.nav').find('li').click(function() {
        //     $(this).find('a').addClass('cur');
        //     $(this).siblings().find('a').removeClass('cur');
        //     // ued.setStorage('nav', $(this).attr('class'));
        // });

        // ued.setStorage('nav', path);

        var timer = null;
        $('.user-link, .login-out').hover(function() {
            clearTimeout(timer);
            $('.login-out').show();
        }, function() {
            timer = setTimeout(function() {
                $('.login-out').hide();
            }, 200);
        });

    };

    return {
        'nav': nav
    }

});