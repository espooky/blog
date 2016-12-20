requirejs.config({
    urlArgs: '_t=' + new Date().getTime(),

    paths: {
        'jquery': '../plugins/jquery-1.10.2.min',
        'hashchange': '../plugins/jquery.ba-hashchange',
        'template': '../plugins/template',

        'ued': '../js/ued',
        'common': '../js/common',
        'dropdown': '../js/dropdown',
        'iCheck': '../js/iCheck'
    }
});

require(['jquery', 'ued', 'common'], function ($, Ued, common) {

    function init() {

        // 设置默认页面
        if (Ued.hash() == '' || Ued.hash() == null) {
            Ued.changePage('#home');
        } else {
            loadPage(Ued.hash());
        }
    }

    // 载入页面片段
    function loadPage(hash) {

        if (hash == '' || hash == '#') {
            return;
        }

        var path = hash.substr(1).split('.')[0];

        $('.nav li').find('a').removeClass('cur');
        if ($('.' + path)) {
            $('.' + path).find('a').addClass('cur');
        }

        $('body').scrollTop(0);
        Ued.loadPage(path);

    }

    // hash监听
    $(window).on('hashchange', function (e) {
        loadPage(Ued.hash());
    });

    init();
    common.nav();
});