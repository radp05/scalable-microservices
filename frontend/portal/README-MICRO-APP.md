# APPS - Micro Apps

Web application developed using [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

### About

- Creating unique independent micro app using angular library which will be used in Main Application Portal

# Getting started

1. Install angular-cli globally if not available
      ```bash
      npm install -g @angular/cli@7.2.1
      ```
  
2. Go to frontend/apps folder and run the following command to create micro app:
     ```bash
     ng new [appName] --create-application=false
     eg: ng new devices --create-application=false
     ```

3. Go to frontend/apps/devices folder and run the following command:
     ```bash
     ng g library [libraryName]
     eg: ng g library devices
     ```
 
4. To add your first route for your Micro Apps
    - Create routing module (eg: devices/src/lib/device-routing.module.ts)
    - Add your routes. Eg:
        ```bash
        import { Routes, RouterModule } from '@angular/router';
        import { NgModule } from '@angular/core';
        import { DeviceListComponent } from './pages/device-list/device-list.component';
        
        const ROUTES: Routes = [
        {
            path: '',
            redirectTo: 'devices',
            pathMatch: 'full',
            data: {
                breadcrumb: ''
            }
        },
        {
            path: 'devices',
            component: DeviceListComponent,
            data: {
                breadcrumb: 'Devices'
            }
        }
        ];
        @NgModule({
            imports: [
                RouterModule.forChild(ROUTES)
            ],
            exports: [
                RouterModule
            ]
        })
        export class DevicesRoutingModule { }
        ```
    
5. Add your routing module inside your micro app module. Eg: device.module.ts
    ```bash
    import { DevicesRoutingModule } from './devices-routing.module';
    
    imports: [
        .....
        DevicesRoutingModule
        .....
    ]
    ```
 
6. To test your library we need to build library and inject into portal's app.module.ts
    - create build.sh file into frontend/apps/devices/build.sh and paste the followinf code:
        ```bash
            cd projects/devices
            npm version patch
            cd ../../
            ng build devices
            cd dist/devices
            npm pack
            cd ../../../../portal
            npm i ../apps/devices/dist/devices/*.tgz --save
        ```
        please replace devices with your library name
    - Now run
        ```bash
        sh build.sh
        ```
        For windows use gitbash command line tool
        
    - Now add the following code inside app.module.ts
        ```bash
            import {deviceModuleName} from 'devices'
            .....
            imports: [
            ......
            deviceModuleName
            .......
            ]
        ```
        Here :
        - deviceModuleName is the library module name
        - devices is the name of libray which is already added in portal's package.json file
 
7. Launch development server, and open `localhost:4200` in your browser to test your module:
     ```bash
     npm start
     ```
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build Application for Prod

 Go to frontend/poratal folder and run the following command:
 ```bash
 sh buildPortal.sh
 ```

## Note

Windows users please run the sh commands in gitbash, since cmd doesn't support linux commnads.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Copyright

 Copyright (C) @Incedo Inc. - All Rights Reserved
 * Unauthorized copying of this project, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Gavishiddappa Gadagi <gavishiddappa.gadagi@incedoinc.com> Nov 2019