'use strict';var lang_1 = require('angular2/src/core/facade/lang');
var collection_1 = require('angular2/src/core/facade/collection');
var util_1 = require('../util');
// Group 1 = "bind-"
// Group 2 = "var-" or "#"
// Group 3 = "on-"
// Group 4 = "bindon-"
// Group 5 = the identifier after "bind-", "var-/#", or "on-"
// Group 6 = idenitifer inside [()]
// Group 7 = idenitifer inside []
// Group 8 = identifier inside ()
var BIND_NAME_REGEXP = /^(?:(?:(?:(bind-)|(var-|#)|(on-)|(bindon-))(.+))|\[\(([^\)]+)\)\]|\[([^\]]+)\]|\(([^\)]+)\))$/g;
/**
 * Parses the property bindings on a single element.
 */
var PropertyBindingParser = (function () {
    function PropertyBindingParser(_parser) {
        this._parser = _parser;
    }
    PropertyBindingParser.prototype.processStyle = function (style) { return style; };
    PropertyBindingParser.prototype.processElement = function (parent, current, control) {
        var _this = this;
        var attrs = current.attrs();
        var newAttrs = new Map();
        collection_1.MapWrapper.forEach(attrs, function (attrValue, attrName) {
            attrName = _this._normalizeAttributeName(attrName);
            var bindParts = lang_1.RegExpWrapper.firstMatch(BIND_NAME_REGEXP, attrName);
            if (lang_1.isPresent(bindParts)) {
                if (lang_1.isPresent(bindParts[1])) {
                    _this._bindProperty(bindParts[5], attrValue, current, newAttrs);
                }
                else if (lang_1.isPresent(bindParts[2])) {
                    var identifier = bindParts[5];
                    var value = attrValue == '' ? '\$implicit' : attrValue;
                    _this._bindVariable(identifier, value, current, newAttrs);
                }
                else if (lang_1.isPresent(bindParts[3])) {
                    _this._bindEvent(bindParts[5], attrValue, current, newAttrs);
                }
                else if (lang_1.isPresent(bindParts[4])) {
                    _this._bindProperty(bindParts[5], attrValue, current, newAttrs);
                    _this._bindAssignmentEvent(bindParts[5], attrValue, current, newAttrs);
                }
                else if (lang_1.isPresent(bindParts[6])) {
                    _this._bindProperty(bindParts[6], attrValue, current, newAttrs);
                    _this._bindAssignmentEvent(bindParts[6], attrValue, current, newAttrs);
                }
                else if (lang_1.isPresent(bindParts[7])) {
                    _this._bindProperty(bindParts[7], attrValue, current, newAttrs);
                }
                else if (lang_1.isPresent(bindParts[8])) {
                    _this._bindEvent(bindParts[8], attrValue, current, newAttrs);
                }
            }
            else {
                var expr = _this._parser.parseInterpolation(attrValue, current.elementDescription);
                if (lang_1.isPresent(expr)) {
                    _this._bindPropertyAst(attrName, expr, current, newAttrs);
                }
            }
        });
        collection_1.MapWrapper.forEach(newAttrs, function (attrValue, attrName) { attrs.set(attrName, attrValue); });
    };
    PropertyBindingParser.prototype._normalizeAttributeName = function (attrName) {
        return lang_1.StringWrapper.startsWith(attrName, 'data-') ? lang_1.StringWrapper.substring(attrName, 5) :
            attrName;
    };
    PropertyBindingParser.prototype._bindVariable = function (identifier, value, current, newAttrs) {
        current.bindElement().bindVariable(util_1.dashCaseToCamelCase(identifier), value);
        newAttrs.set(identifier, value);
    };
    PropertyBindingParser.prototype._bindProperty = function (name, expression, current, newAttrs) {
        this._bindPropertyAst(name, this._parser.parseBinding(expression, current.elementDescription), current, newAttrs);
    };
    PropertyBindingParser.prototype._bindPropertyAst = function (name, ast, current, newAttrs) {
        var binder = current.bindElement();
        binder.bindProperty(util_1.dashCaseToCamelCase(name), ast);
        newAttrs.set(name, ast.source);
    };
    PropertyBindingParser.prototype._bindAssignmentEvent = function (name, expression, current, newAttrs) {
        this._bindEvent(name, expression + "=$event", current, newAttrs);
    };
    PropertyBindingParser.prototype._bindEvent = function (name, expression, current, newAttrs) {
        current.bindElement().bindEvent(util_1.dashCaseToCamelCase(name), this._parser.parseAction(expression, current.elementDescription));
        // Don't detect directives for event names for now,
        // so don't add the event name to the CompileElement.attrs
    };
    return PropertyBindingParser;
})();
exports.PropertyBindingParser = PropertyBindingParser;
//# sourceMappingURL=property_binding_parser.js.map