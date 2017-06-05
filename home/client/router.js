   // let login = require('home:widget/login/login.vjs');
   // let repertory = require('home:widget/repertory/repertory.vjs');


    import repertory from './widget/repertory/repertory.vjs'
    import main from './widget/main/main.vjs';
    import login from './widget/login/login.vjs';
    import migrate from './widget/migrate/migrate.vjs';
    import sites from './widget/sites/sites.vjs';


    const routes = [
      { path: '/repertory', component: repertory },
      { path: '/login', component: login },
      { path: '/sites', component: sites },
      { path: '/migrate', component: migrate },
      { path: '/', component: main },
    ]
    exports.routes = routes;

