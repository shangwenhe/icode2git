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
        <div id="app">
          <router-view></router-view>
        </div>
    {% script %}
        require.async(["vue", "home:static/lib/vue/vue-router.min.js", 'home:router.js'],
        function(Vue,VueRouter,routes){
            // iView 模块库
            let iView = require("home:static/lib/ivue/iview.min.js");
            Vue.use(iView);

            Vue.use(VueRouter)

            let navigator = require("home:widget/nav/nav.vjs");
            Vue.component('navigator', navigator.default);

            const router = new VueRouter( routes)
            // router.beforeEach(function(to, from, next){
            //     console.log(to, from) 
            //     next();
            // })
            const app = new Vue({
              router
            }).$mount('#app')

        })

    {% endscript %}
    {% endbody %}
{% endhtml %}
