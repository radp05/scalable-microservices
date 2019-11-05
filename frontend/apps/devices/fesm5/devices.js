import { RouterModule } from '@angular/router';
import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DevicesService = /** @class */ (function () {
    function DevicesService() {
    }
    DevicesService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DevicesService.ctorParameters = function () { return []; };
    /** @nocollapse */ DevicesService.ngInjectableDef = defineInjectable({ factory: function DevicesService_Factory() { return new DevicesService(); }, token: DevicesService, providedIn: "root" });
    return DevicesService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DevicesComponent = /** @class */ (function () {
    function DevicesComponent() {
    }
    /**
     * @return {?}
     */
    DevicesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DevicesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-devices',
                    template: "\n    <p>\n      devices works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    DevicesComponent.ctorParameters = function () { return []; };
    return DevicesComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ROUTES = [
    {
        path: '',
        redirectTo: 'devices',
        pathMatch: 'full'
    },
    {
        path: 'devices',
        component: DevicesComponent
    }
];
var DevicesRoutingModule = /** @class */ (function () {
    function DevicesRoutingModule() {
    }
    DevicesRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule.forChild(ROUTES)
                    ],
                    exports: [
                        RouterModule
                    ]
                },] }
    ];
    return DevicesRoutingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DevicesModule = /** @class */ (function () {
    function DevicesModule() {
    }
    DevicesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DevicesComponent],
                    imports: [
                        DevicesRoutingModule
                    ],
                    exports: [DevicesComponent]
                },] }
    ];
    return DevicesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DevicesService, DevicesComponent, DevicesModule, DevicesRoutingModule as ɵa };

//# sourceMappingURL=devices.js.map