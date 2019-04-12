var controllers = require('../controllers/controllers.js')

module.exports = function(app){

    app.get('/', function (req,res) {

        controllers.index(req,res);
    })

    app.get('/new/:name', function(req,res) {

        controllers.addname(req,res);
    })

    app.get('/remove/:name',function(req,res) {

        controllers.remove(req,res)
    })

    app.get('/:name',function(req,res) {

        controllers.info(req,res)
    })

}