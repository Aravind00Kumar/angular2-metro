var Vanilla = (function () {
    function Vanilla(element) {
        this.element = element;
    }
    Vanilla.prototype.load = function (context, fn) {
        if (document.readyState != 'loading') {
            fn.call(context);
        }
        else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    };
    Vanilla.prototype.addClass = function (className) {
        if (this.element.classList)
            this.element.classList.add(className);
        else
            this.element.className += ' ' + className;
    };
    Vanilla.prototype.removeClass = function (className) {
        if (this.element.classList)
            this.element.classList.remove(className);
        else
            this.element.className = this.element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    };
    Vanilla.prototype.attr = function (attribute, value) {
        if (value === undefined)
            return this.element.getAttribute(attribute);
        this.element.setAttribute(attribute, value);
    };
    Vanilla.prototype.css = function (attribute, value) {
        this.element.style.attribute = value;
    };
    return Vanilla;
})();
exports.Vanilla = Vanilla;
