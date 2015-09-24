/// <reference path="_references.ts" />
'use strict';
(function () {
    System['defaultJSExtensions'] = true;
    System.config({
        paths: {
            'angular2/*': '/lib/angular2/*',
        },
        map: {
            rx: '/lib/rx.js'
        }
    });
    System.import('app').then(function (app) {
        app.main();
    }, function (e) {
        console.error('Boostrap angular2 failed!', e);
    });
})();
