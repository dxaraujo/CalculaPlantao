import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {APP_ROUTER_PROVIDERS} from './app.routes';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {AppComponent} from './app.component';

bootstrap(AppComponent,[
    APP_ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    disableDeprecatedForms(),
    provideForms()
]);
