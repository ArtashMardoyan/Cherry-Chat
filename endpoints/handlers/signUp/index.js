const config = require('../../../common/config/env');
const meta = require('../../../common/meta');
const _assign = require('lodash').assign;

module.exports = (req, res) => {
    res.render('signUp', _assign({
        title: config.title + ' | SignUp',
        meta: meta.signUp,
        baseUrl: config.baseUrl + '/signUp'
    }, req.locals));
};
