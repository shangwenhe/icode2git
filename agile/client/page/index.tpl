<!doctype html>
{% html lang="en" framework="agile:static/js/mod.js" %}
    {% head %}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="/static/favicon.ico">
        <title>{{ title }}</title>
        {% require "agile:static/lib/ivue/iview.css" %}
        {% require "agile:static/lib/vue/vue.min.js" %}
        {% require "agile:static/lib/vue/vue-router.min.js" %}
    {% endhead %}
    {% body %}
        <div id="app">
          <router-view></router-view>
        </div>
        {% script %}
            require.async(["vue", "agile:static/lib/vue/vue-router.min.js"],
            function(Vue,VueRouter,routes){
            })

        {% endscript %}
    {% endbody %}
{% endhtml %}
