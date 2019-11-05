import { RouterModule } from '@angular/router';
import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DevicesService {
    constructor() { }
}
DevicesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DevicesService.ctorParameters = () => [];
/** @nocollapse */ DevicesService.ngInjectableDef = defineInjectable({ factory: function DevicesService_Factory() { return new DevicesService(); }, token: DevicesService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DevicesComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DevicesComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-devices',
                template: `
    <p>
      devices works!
    </p>
  `
            }] }
];
/** @nocollapse */
DevicesComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ROUTES = [
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
class DevicesRoutingModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DevicesModule {
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