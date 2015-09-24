/// <reference path="_references.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require("angular2/angular2");
var router_1 = require("angular2/router");
var router_2 = require('angular2/router');
var button_1 = require('./examples/button/button');
var App = (function () {
    function App() {
        this.name = "Aravind";
    }
    App = __decorate([
        router_2.RouteConfig([
            { path: "/button", component: button_1.Button, as: 'button' }
        ]),
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            directives: [router_2.RouterOutlet, router_2.RouterLink],
            template: "<h1> Hello World! Welcome {{name}}</h1>\n                    <nav>\n                        <ul>\n                            <li> <a [router-link]=\"['./button']\">Button</a></li>\n                        </ul>\n                    </nav>\n                    <main>\n                        <router-outlet></router-outlet>\n                    </main>\n                  ",
        })
    ], App);
    return App;
})();
exports.App = App;
// bootstrap application 
function main() {
    angular2_1.bootstrap(App, [router_1.ROUTER_BINDINGS]);
}
exports.main = main;
