const config = require('../../../common/config/env');
const meta = require('../../../common/meta');
const _assign = require('lodash').assign;

module.exports = (req, res) => {
    res.render('home', _assign({
        title: config.title,
        meta: meta.home,
        baseUrl: config.baseUrl
    }, req.locals));
};
