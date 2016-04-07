import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ListComponent} from './list.component';
import {DetailComponent} from './detail.component';

declare var jQuery:JQueryStatic;

@Component({
    selector: '[app]',
    templateUrl: '../view/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/list', name: 'List', component: ListComponent },
    { path: '/search', name: 'Search', component: ListComponent },
    { path: '/detail', name: 'Detail', component: DetailComponent }
])
export class AppComponent {

    constructor() {
        jQuery.getScript('bootstrap/dist/js/bootstrap.min.js');
    }
}
