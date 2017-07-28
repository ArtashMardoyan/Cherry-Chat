const UsersService = require('./../../../data/model/users');
const config = require('../../../common/config/env');
const meta = require('../../../common/meta');
const _assign = require('lodash').assign;

module.exports = (req, res) => {
    res.render('profilePage', _assign({
        title: config.title + ' | My profile',
        meta: meta.signUp,
        baseUrl: config.baseUrl + '/myProfile',
        user:req.body
    }, req.locals));

    UsersService.createUser(
        req.body.email,
        req.body.password,
        {
            fullName: req.body.fullName,
            gender: req.body.gender,
            date:{
                year: req.body.year,
                month: req.body.month,
                day: req.body.day
            }
        })
        .then((user) => {
            return res.send(user);
        })
        .catch((err) => {
            return res.send(err);
        });
};
