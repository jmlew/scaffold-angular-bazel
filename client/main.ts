import {enableProdMode} from '@angular/core';
import {platformBrowser} from '@angular/platform-browser';

import {AppModuleNgFactory} from './components/app_module.ngfactory';  // from //experimental/users/jasonlewis/scaffolding/angular/example-routing-basic/client/components:app

// The "main" for the Angular 2 app. Tells Angular to start doing stuff
// (bootstrap the app).

// Use Angular's faster runtime mode when compiled by JSCompiler.
if (COMPILED) enableProdMode();

// This bootstraps the NgFactory, which is generated by the Ahead-of-Time
// Angular 2 template compiler. See http://go/angular2/production
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);