(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/router'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('devices', ['exports', '@angular/router', '@angular/core'], factory) :
    (factory((global.devices = {}),global.ng.router,global.ng.core));
}(this, (function (exports,router,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DevicesService = /** @class */ (function () {
        function DevicesService() {
        }
        DevicesService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DevicesService.ctorParameters = function () { return []; };
        /** @nocollapse */ DevicesService.ngInjectableDef = i0.defineInjectable({ factory: function DevicesService_Factory() { return new DevicesService(); }, token: DevicesService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
                        imports: [
                            router.RouterModule.forChild(ROUTES)
                        ],
                        exports: [
                            router.RouterModule
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
            { type: i0.NgModule, args: [{
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

    exports.DevicesService = DevicesService;
    exports.DevicesComponent = DevicesComponent;
    exports.DevicesModule = DevicesModule;
    exports.ɵa = DevicesRoutingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=devices.umd.js.map