var mongoose = require('mongoose');
require('../models/models.js');

var User = mongoose.model('User');

module.exports = {
    index: function (req, res) {

        User.find({}, function (err, info) {
            if (err) {
                console.log("Returned error", err);

                res.json({ message: "Error", error: err })
            }
            else {

                res.json({message: "Success", data: info})
            }
        })
    },

    addname: function (req, res) {

        var name = req.params.name
        newUser = new User({name: name});

        newUser.save(function (err) {
        if(err){
            console.log("We have an comment error!", err);
            res.redirect('/');
        }
        else{
            console.log('Comment successfully added to User');
            res.redirect('/');
        }
        })
    },

    remove: function (req, res) {
        var name = req.params.name

        User.remove({name:name}, function(err) {
            if(err){
                console.log("We have an error!", err);
                res.redirect('/');
            }
            else{
                console.log('Successfully DELETED');
                res.redirect('/');
            }
        })
    },

    info: function (req,res) {
        var name = req.params.name

        User.findOne({name:name}, function(err, userinfo) {
            if(err){
                console.log("We have an error!", err);
                res.redirect('/');
            }
            else{

                res.json({userinfo});
            }
        })

    }

}