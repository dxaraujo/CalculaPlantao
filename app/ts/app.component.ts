import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {SideBarComponent, FeriadoListComponent, FeriadoFormComponent} from './component';
import {FeriadoService} from './service';

declare var jQuery:JQueryStatic;

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
        jQuery.getScript('bootstrap/dist/js/bootstrap.min.js');
        jQuery.getScript('metisMenu/dist/metisMenu.min.js');
        jQuery.getScript('slimscroll/jquery.slimscroll.min.js');
        jQuery.getScript('PACE/pace.min.js');
        jQuery.getScript('sweetalert/dist/sweetalert.min.js');
        //jQuery('#side-menu').metisMenu();
        jQuery.getScript('js/inspinia.js');
    }
}
