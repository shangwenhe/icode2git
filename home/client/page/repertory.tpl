<!doctype html>
{% html lang="en" framework="home:static/js/mod.js" %}
    {% head %}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="/static/favicon.ico">
        <title>{{ title }}</title>
        {% require "home:static/lib/ivue/iview.css" %}
        {% require "home:static/lib/vue/vue.min.js" %}
        {% require "home:static/lib/vue/vue-router.min.js" %}
    
    {% endhead %}

    {% body %}
    <div id='Mindex'></div>
    {% script %}
    require.async(["vue","home:static/lib/vue/vue-router.min.js", "home:widget/repertory/repertory.vjs"],
    function(Vue, routers, repertory){

        repertory.default.el= "#Mindex";
    
        // iView 模块库
        let iView = require("home:static/lib/ivue/iview.min.js");
        Vue.use(iView);
        new Vue(repertory.default); 
    });
    {% endscript %}
    {% endbody %}
{% endhtml %}

