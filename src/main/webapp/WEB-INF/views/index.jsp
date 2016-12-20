<%--
Created by IntelliJ IDEA.
User: zhanghao
Date: 2016/12/17
Time: 23:23
To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>开始使用Layui</title>
    <link rel="stylesheet" href="${ctx}/resources/layui/css/layui.css">
    <link rel="stylesheet" href="${ctx}/resources/css/demo.css">

</head>
<body>
<div class="layer_banner">
    <div class="box" style="height:190px;">
        <h1>layer弹层组件官方演示与讲解</h1>
        <span class="ie6PNG" title="layer,一个可以让你想到即可做到的JavaScript弹窗（层）解决方案"></span>
    </div>
</div>


<%--<fieldset class="layui-elem-field layui-field-title">--%>
<%--&lt;%&ndash;<legend>水平导航菜单</legend>&ndash;%&gt;--%>
<%--</fieldset>--%>

<ul class="layui-nav">
    <li class="layui-nav-item"><a href="">最新活动</a></li>
    <li class="layui-nav-item layui-this">
        <a href="">产品</a>
        <dl class="layui-nav-child">
            <dd><a href="">选项1</a></dd>
            <dd><a href="">选项2</a></dd>
            <dd><a href="">选项3</a></dd>
        </dl>
    </li>
    <li class="layui-nav-item"><a href="">大数据</a></li>
    <li class="layui-nav-item">
        <a href="javascript:;">解决方案</a>
        <dl class="layui-nav-child">
            <dd><a href="">移动模块</a></dd>
            <dd><a href="">后台模版</a></dd>
            <dd class="layui-this"><a href="">选中项</a></dd>
            <dd><a href="">电商平台</a></dd>
        </dl>
    </li>
    <li class="layui-nav-item"><a href="">社区</a></li>
</ul>

<fieldset class="layui-elem-field layui-field-title" style="margin-top: 50px;">
    <legend>垂直导航菜单</legend>
</fieldset>

<ul class="layui-nav layui-nav-tree" lay-filter="demo">
    <li class="layui-nav-item layui-nav-itemed">
        <a href="javascript:;">默认展开</a>
        <dl class="layui-nav-child">
            <dd><a href="javascript:;">选项一</a></dd>
            <dd><a href="javascript:;">选项二</a></dd>
            <dd><a href="javascript:;">选项三</a></dd>
            <dd><a href="">跳转项</a></dd>
        </dl>
    </li>
    <li class="layui-nav-item">
        <a href="javascript:;">解决方案</a>
        <dl class="layui-nav-child">
            <dd><a href="">移动模块</a></dd>
            <dd><a href="">后台模版</a></dd>
            <dd><a href="">电商平台</a></dd>
        </dl>
    </li>
    <li class="layui-nav-item"><a href="">云市场</a></li>
    <li class="layui-nav-item"><a href="">社区</a></li>
</ul>

<fieldset class="layui-elem-field layui-field-title" style="margin-top: 50px;">
    <legend>侧边固定导航菜单</legend>
</fieldset>

← 囖，就左边那家伙！ 带图标神马的那是必须可以的。另外你可能还需要下拉菜单，这个将在下版本推出！

<fieldset class="layui-elem-field layui-field-title" style="margin-top: 50px;">
    <legend>默认面包屑</legend>
</fieldset>

<span class="layui-breadcrumb">
  <a href="/">首页</a>
  <a href="/demo/">演示</a>
  <a><cite>导航元素</cite></a>
</span>

<fieldset class="layui-elem-field layui-field-title" style="margin-top: 50px;">
    <legend>自定义分隔符的面包屑</legend>
</fieldset>

<span class="layui-breadcrumb" lay-separator="—">
  <a href="">首页</a>
  <a href="">国际新闻</a>
  <a href="">亚太地区</a>
  <a><cite>正文</cite></a>
</span>

<fieldset class="layui-elem-field layui-field-title" style="margin-top: 50px;">
    <legend>还可以用于门户频道的面包屑</legend>
</fieldset>

<span class="layui-breadcrumb" lay-separator="|">
  <a href="">娱乐</a>
  <a href="">八卦</a>
  <a href="">体育</a>
  <a href="">搞笑</a>
  <a href="">视频</a>
  <a href="">游戏</a>
  <a href="">综艺</a>
</span>

<p class="layui-elem-quote">其实就是自定义了个“|”的分隔符，然后最后一项也可以点。</p>

<script src="${ctx}/resources/layui/layui.js"></script>
<script src="${ctx}/resources/js/require.js" data-main="${ctx}/resources/js/main"></script>
<script>
    layui.use(['layer', 'element'], function () {
        var element = layui.element(); //导航的hover效果、二级菜单等功能，需要依赖element模块
        //监听导航点击
        element.on('nav(demo)', function (elem) {
            //console.log(elem)
            layer.msg(elem.text());
        });
    });
</script>

</body>
</html>