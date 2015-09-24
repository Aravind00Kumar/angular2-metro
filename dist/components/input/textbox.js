/// <reference path="../../_references.ts" />
/// <reference path="../IComponent" />
var AngularMetro;
(function (AngularMetro) {
    var Components;
    (function (Components) {
        var Input;
        (function (Input) {
            var Textbox = (function () {
                function Textbox(name) {
                    this.name = name;
                }
                return Textbox;
            })();
            Input.Textbox = Textbox;
        })(Input = Components.Input || (Components.Input = {}));
    })(Components = AngularMetro.Components || (AngularMetro.Components = {}));
})(AngularMetro || (AngularMetro = {}));
