module.exports = [
    {
        url: '/',
        method: 'get',
        handler: './handlers/home'
    },
    {
        url: '/404',
        method: 'get',
        handler: './handlers/404'
    },
    {
        url: '*',
        method: 'get',
        handler: './handlers/error'
    },
];
