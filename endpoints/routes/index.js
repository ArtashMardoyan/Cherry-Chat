module.exports = [
    {
        url: '/',
        method: 'get',
        handler: './handlers/home'
    },
    {
        url: '/signUp',
        method: 'get',
        handler: './handlers/signUp'
    },
    {
        url: '/404',
        method: 'get',
        handler: './handlers/404'
    },
    {
        url: '/myProfile',
        method: 'get',
        handler: './handlers/profilePage'
    },
    {
        url: '*',
        method: 'get',
        handler: './handlers/error'
    },
];
