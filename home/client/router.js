   // let login = require('home:widget/login/login.vjs');
   // let repertory = require('home:widget/repertory/repertory.vjs');


    import repertory from './widget/repertory/repertory.vjs'
    import login from './widget/login/modal.vjs';

    const routes = [
      { path: '/repertory', component: repertory },
      { path: '/login', component: login }
    ]
    exports.routes = routes;

