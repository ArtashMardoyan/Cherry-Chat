'use strict';

module.exports = {
    options: {
        sourceMap: false,
        presets: ['es2015']
    },
    dist: {
        files: {
            '<%= project.temp %>/js/script.js': '<%= project.temp %>/js/script.js'
        }
    }
};
