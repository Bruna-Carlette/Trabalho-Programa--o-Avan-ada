var express = require('express');
var router = express.Router();


var User = require('../models/user');

router.post('/autenticacao/', function(req, res, next){
    
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
    });

    user.save(function(err, result){
        if(err){
            return res.status(500).json({
                myErrorTitle: 'Um erro na hora de salvar',
                myError: err
            });
        }
        res.status(201).json({
            myUserSucess: 'Usuário salvo com sucesso',
            objUserSave: result
        });
    });

});



module.exports = router;