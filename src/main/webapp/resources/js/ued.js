define(['jquery', 'template', 'hashchange'], function ($, template) {
    var Ued = {};

    window.Ued = Ued = {};

    /**
     * -------------获取hash-------------
     * Ued.hash()
     */
    Ued.hash = function () {
        var a = window.location.hash || '';
        // console.log(a);
        return a;
    };

    /**
     * -------------加载页面元素（浏览器地址栏不改变）-------------
     * Ued.loadPage(url, elem, callback)
     */
    Ued.loadPage = function (url, elem, callback) {

        if (url == '#' || url == '') {
            return;
        }

        var elem = elem || '#contMain';

        // console.log('url:', url);

        $(elem).empty().load(url, function (response, status, xhr) {

            if (status == 'error') {
                alert('错误！页面没有找到：\r' + url);
                return;
            }

            var a = url.split('/');

            var jsName = a[a.length - 1];

            require(['../js/page/' + jsName], function (mod) {

                mod.init();
                // console.log('当前页面 :', url + '(html/js)');

            });

            if (typeof callback == 'function') {
                callback.call(this);
            }

        });
    };

    /**
     * -------------web sessionStorage-------------
     * 2015/5/11
     * Ued.getSession(key)
     * Ued.setSession(key, obj)
     * Ued.removeSession(key)
     */
    Ued.getSession = function (key) {

        if (!window.sessionStorage) {
            console.log('浏览器不支持 Session storage. 请关闭“隐私模式”或者升级浏览器');
            return;
        }

        var a = sessionStorage.getItem(key);
        var r;
        if (a) {
            r = JSON.parse(a);
        } else {
            r = null;
        }

        return r;
    };

    Ued.setSession = function (key, obj) {
        if (!key || !obj || key == "" || obj == "") {
            return;
        }
        sessionStorage.setItem(key, JSON.stringify(obj));
        console.log('保存成功，session：', sessionStorage.getItem(key));
    };

    Ued.removeSession = function (key) {

        sessionStorage.removeItem(key);

    };

    /**
     * -------------web localStorage-------------
     * 2015/6/3
     * Ued.getStorage(key)
     * Ued.setStorage(key, obj)
     * Ued.clearStorage()
     */
    Ued.getStorage = function (key) {

        if (!window.localStorage) {

            console.log('浏览器不支持 Local storage. 请关闭“隐私模式”或者升级浏览器');
            return
        }

        return window.localStorage.getItem(key) || null;
    };

    Ued.setStorage = function (key, obj) {

        if (!window.localStorage) {

            console.log('浏览器不支持 Local storage. 请关闭“隐私模式”或者升级浏览器');
            return
        }
        window.localStorage.setItem(key, obj);
        //console.log('保存成功');
    };

    Ued.clearStorage = function () {
        window.localStorage.clear();
        //console.log("Storage清空成功")
    };

    /**
     * -------------跳转页面（浏览器地址栏hash改变）-------------
     * Ued.changePage(url);
     */
    Ued.changePage = function (url) {
        window.location.hash = url;
    };


    //js模板渲染
    Ued.render = function (data, elem, temp, type, callback) {

        var render = template.compile(temp);

        var output = render(data);

        var type = arguments[3] || 'html';
        if (type == 'html') {
            $(elem).empty();
            $(elem).html(output);
        } else if (type == 'append') {
            $(elem).append(output);
        } else if (type == 'prepend') {
            $(elem).prepend(output);
        }

        if (typeof callback == 'function') {
            callback.call(this);
        }
    };

    Ued.noData = function (elem) {
        $(elem).html();
        alert('暂无查询结果');
    };


    /**
     * -------------元素内显示加载动画-------------
     * Ued.loading.show(elem, type);
     * elem:默认body; type:默认append，可选：prepend
     * Ued.loading.hide(elem)
     */
    Ued.loading = {
        show: function (elem, type) {

            if ($('#loading_wrap').length > 0) {
                return;
            }

            var elem = arguments[0] || 'body';
            var type = arguments[1] || 'append';

            //alert(elem+","+type);

            var loadWrap = '<div class="loading_wrap">' +
                '<div class="h50p"></div>' +
                '<div class="loading"><!--<span class="glyphicon glyphicon-refresh"></span>--></div>' +
                '</div>';

            if (type == 'append') {
                $(loadWrap).appendTo(elem);
            } else if (type == 'prepend') {
                $(loadWrap).prependTo(elem);
            }
            return elem + ',' + type;
        },
        hide: function (elem) {

            if ($('#loading_wrap').length > 0) {
                return;
            }

            var elem = arguments[0] || 'body';
            $(elem).find('.loading_wrap').hide();
            return elem;
        }
    };

    return Ued;
});
