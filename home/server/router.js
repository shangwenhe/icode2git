module.exports = function(router){
    // you can add app common logic here
    // router.use(function(req, res, next){
    // });

    // also you can add custom action
    // require /spa/some/hefangshi
    // router.get('/some/:user', router.action('api'));
    
    // or write action directly
    // router.get('/some/:user', function(res, req){});

    // a restful api example
    // router.route('/book')
    //     // PUT /home/book
    //     .put(router.action('book').put)
    //     // GET /home/book
    //     .get(router.action('book'));

    // router.route('/book/:id')
    //     // GET /home/book/1
    //     .get(router.action('book').get)
    //     // DELETE /home/book/1
    //     .delete(router.action('book').delete);

    router.delete('/api/repertory/:_id', router.action('api/repertory'));
    router.put('/api/repertory/:_id/:action', router.action('api/repertory'));

    router.delete('/api/sites/:_id', router.action('api/sites'));
    router.put('/api/sites/:_id', router.action('api/sites'));

    router.delete('/api/migrate/:_id', router.action('api/migrate'));

    router.get('/api/gitlab/:uncouple', router.action('api/gitlab'));
    router.post('/api/gitlab/:uncouple', router.action('api/gitlab'));

    router.post('/api/icode/projects', router.action('api/icode').projects);

};
