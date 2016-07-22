import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {SideBarComponent, FeriadoListComponent, FeriadoFormComponent} from './component';
import {FeriadoService} from './service';

@Component({
    selector: '[app]',
    templateUrl: '../view/app.component.html',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, SideBarComponent],
    providers: [FeriadoService]
})
export class AppComponent {

    ngAfterViewInit() {
        jQuery('#side-menu').metisMenu();
        jQuery.getScript('bootstrap/dist/js/bootstrap.min.js');
        jQuery.getScript('js/inspinia.js');
    }
}
