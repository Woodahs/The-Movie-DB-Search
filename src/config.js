module.exports = {
    paths: {
        src: './',
    	mainStyle: 'scss/style.scss',
        sass: 'scss/**/*.scss',
        sassDirectory: 'scss',
        dist: '../dist/',
        js: 'js/**/*',
        html: '*.html'
    },
    webpack: {
    	mainEntry: './js/app.js'
    }
};
