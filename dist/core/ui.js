/// <reference path="../_references.ts" />
//import {Component, View, bootstrap} from "angular2/angular2";
var vanilla_1 = require("../core/vanilla");
var UI = (function () {
    function UI() {
        this.vanilla = new vanilla_1.Vanilla();
        this.vanilla.load(this, this.load);
    }
    UI.prototype.load = function () {
        this.removeOutline();
    };
    UI.prototype.removeOutline = function () {
        $('*').on('keydown.tab', function (e) {
            if (9 == e.which) {
                if ($('body').hasClass('outline')) {
                    return;
                }
                $('body').addClass('outline');
            }
        });
        $('*').on('mousedown', function (e) {
            if ($('body').hasClass('outline')) {
                $('body').removeClass('outline');
                $('body').focus();
            }
        });
        // 	$('*').on('keydown.tab', function(e){
        // /*
        // TAB or Shift Tab, Aw.
        // Add some more key code if you really want
        // */
        // if ( 9== e.which && this == e.target ){
        //   window.setTimeout( function(){
        //     $('.outline').removeClass('outline');
        //      $(document.activeElement).addClass('outline');
        //   }, 100 );
        //}
        //});	
    };
    return UI;
})();
exports.UI = UI;
