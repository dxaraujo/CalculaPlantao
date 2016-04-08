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
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/list',   name: 'List', component: ListComponent },
    { path: '/detail', name: 'Detail', component: DetailComponent },
    { path: '/feriado', name: 'Feriado', component: FeriadoListComponent },
    { path: '/feriadoForm', name: 'FeriadoForm', component: FeriadoFormComponent }
])
export class AppComponent {

    constructor() {
        jQuery.getScript('bootstrap/dist/js/bootstrap.min.js');
    }
}
