/// <reference path="../../_references" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require("angular2/angular2");
var text_1 = require('components/input/text/text');
var TextExample = (function () {
    function TextExample() {
        this.value = "Aravind";
        this.type = "password";
        this.message = "Hello!";
    }
    TextExample = __decorate([
        angular2_1.Component({
            selector: 'div'
        }),
        angular2_1.View({
            templateUrl: "./examples/text/text.html",
            directives: [text_1.Text, angular2_1.FORM_DIRECTIVES]
        })
    ], TextExample);
    return TextExample;
})();
exports.TextExample = TextExample;
