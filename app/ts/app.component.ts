import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent, ListComponent, DetailComponent, FeriadoListComponent, FeriadoFormComponent} from './component';

declare var jQuery:JQueryStatic;

@Component({
    selector: '[app]',
    templateUrl: '../view/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/feriado', name: 'Feriado', component: FeriadoListComponent, useAsDefault: true },
    { path: '/feriadoform/:id', name: 'FeriadoForm', component: FeriadoFormComponent }
])
export class AppComponent {

    constructor() {
        jQuery.getScript('bootstrap/dist/js/bootstrap.min.js');
    }
}
