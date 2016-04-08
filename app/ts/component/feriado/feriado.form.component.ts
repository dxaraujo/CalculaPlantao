import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Feriado} from '../../model';

@Component({
    selector: '[feriado-list]',
    templateUrl: '../../../view/feriado/feriado.form.html',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class FeriadoFormComponent {

    feriado: Feriado;

    salvar(f) {
        this.feriado = new Feriado(f.id, f.date, f.name);
        console.log(this.feriado);
    }
}
