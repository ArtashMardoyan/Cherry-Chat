const config = require('../../../common/config/env');
const meta = require('../../../common/meta');
const _assign = require('lodash').assign;

module.exports = (req, res) => {
    res.render('profilePage', _assign({
        title: config.title + ' | My profile',
        meta: meta.signUp,
        baseUrl: config.baseUrl + '/myProfile',
    }, req.locals));
};
