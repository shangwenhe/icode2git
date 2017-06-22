    // let login = require('home:widget/login/login.vjs');
    // let repertory = require('home:widget/repertory/repertory.vjs');


   import repertory from './widget/repertory/repertory.vjs'
   import xiaodu from './widget/repertory/xiaodu/xiaodu.vjs'
   import icode from './widget/repertory/icode/icode.vjs'
   import nav from './widget/nav/nav.vjs';
   import login from './widget/login/login.vjs';
   import migrate from './widget/migrate/migrate.vjs';
   import sites from './widget/sites/sites.vjs';
   import launch from './widget/launch/launch.vjs';


   const routes = [{
       path: '/launch/:id',
       name: 'launch',
       component: launch
   }, {
       path: '/repertory',
       name: 'repertory',
       component: repertory
   }, {
       path: '/repertory/xiaodu',
       name: 'repertory',
       component: xiaodu 
   }, {
       path: '/repertory/icode',
       name: 'repertory',
       component: icode 
   }, {
       path: '/login',
       name: 'login',
       component: login
   }, {
       path: '/sites',
       name: 'sites',
       component: sites
   }, {
       path: '/migrate',
       name: 'migrate',
       component: migrate
   }, {
       path: '/',
       name: 'home',
       component: nav
   }, ];

exports.routes = routes;
