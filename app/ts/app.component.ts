import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {SideBarComponent, FeriadoListComponent, FeriadoFormComponent} from './component';
import {FeriadoService} from './service';

@Component({
    selector: '[app]',
    templateUrl: '../view/app.component.html',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, SideBarComponent],
    providers: [FeriadoService]
})
@RouteConfig([
    { path: '/feriado', name: 'Feriado', component: FeriadoListComponent, useAsDefault: true },
    { path: '/feriadoDetail', name: 'FeriadoDetail', component: FeriadoFormComponent }
])
export class AppComponent {

    ngOnInit() {
        jQuery('#side-menu').metisMenu();
        jQuery.getScript('bootstrap/dist/js/bootstrap.min.js');
        jQuery.getScript('js/inspinia.js');
    }
}
