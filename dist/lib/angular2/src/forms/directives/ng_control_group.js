'use strict';var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var metadata_1 = require('angular2/metadata');
var di_1 = require('angular2/di');
var lang_1 = require('angular2/src/core/facade/lang');
var control_container_1 = require('./control_container');
var shared_1 = require('./shared');
var controlGroupBinding = lang_1.CONST_EXPR(new di_1.Binding(control_container_1.ControlContainer, { toAlias: di_1.forwardRef(function () { return NgControlGroup; }) }));
/**
 * Creates and binds a control group to a DOM element.
 *
 * This directive can only be used as a child of {@link NgForm} or {@link NgFormModel}.
 *
 * # Example
 *
 * In this example, we create the credentials and personal control groups.
 * We can work with each group separately: check its validity, get its value, listen to its changes.
 *
 *  ```
 * @Component({selector: "signup-comp"})
 * @View({
 *      directives: [FORM_DIRECTIVES],
 *      template: `
 *              <form #f="form" (submit)='onSignUp(f.value)'>
 *                <div ng-control-group='credentials' #credentials="form">
 *                  Login <input type='text' ng-control='login'>
 *                  Password <input type='password' ng-control='password'>
 *                </div>
 *                <div *ng-if="!credentials.valid">Credentials are invalid</div>
 *
 *                <div ng-control-group='personal'>
 *                  Name <input type='text' ng-control='name'>
 *                </div>
 *                <button type='submit'>Sign Up!</button>
 *              </form>
 *      `})
 * class SignupComp {
 *  onSignUp(value) {
 *    // value === {personal: {name: 'some name'},
 *    //  credentials: {login: 'some login', password: 'some password'}}
 *  }
 * }
 *
 *  ```
 */
var NgControlGroup = (function (_super) {
    __extends(NgControlGroup, _super);
    function NgControlGroup(_parent) {
        _super.call(this);
        this._parent = _parent;
    }
    NgControlGroup.prototype.onInit = function () { this.formDirective.addControlGroup(this); };
    NgControlGroup.prototype.onDestroy = function () { this.formDirective.removeControlGroup(this); };
    Object.defineProperty(NgControlGroup.prototype, "control", {
        get: function () { return this.formDirective.getControlGroup(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgControlGroup.prototype, "path", {
        get: function () { return shared_1.controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgControlGroup.prototype, "formDirective", {
        get: function () { return this._parent.formDirective; },
        enumerable: true,
        configurable: true
    });
    NgControlGroup = __decorate([
        metadata_1.Directive({
            selector: '[ng-control-group]',
            bindings: [controlGroupBinding],
            properties: ['name: ng-control-group'],
            lifecycle: [metadata_1.LifecycleEvent.OnInit, metadata_1.LifecycleEvent.OnDestroy],
            exportAs: 'form'
        }),
        __param(0, di_1.Host()),
        __param(0, di_1.SkipSelf()), 
        __metadata('design:paramtypes', [control_container_1.ControlContainer])
    ], NgControlGroup);
    return NgControlGroup;
})(control_container_1.ControlContainer);
exports.NgControlGroup = NgControlGroup;
//# sourceMappingURL=ng_control_group.js.map