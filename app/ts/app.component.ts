import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FeriadoListComponent, FeriadoFormComponent} from './component';
import {FeriadoService} from './service';

declare var jQuery:JQueryStatic;

@Component({
    selector: '[app]',
    templateUrl: '../view/app.component.html',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [FeriadoService]
})
@RouteConfig([
    { path: '/feriado', name: 'Feriado', component: FeriadoListComponent, useAsDefault: true },
    { path: '/feriadoDetail', name: 'FeriadoDetail', component: FeriadoFormComponent }
])
export class AppComponent {

    constructor() {
        jQuery.getScript('bootstrap/dist/js/bootstrap.min.js');
    }
}
