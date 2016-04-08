import {Component, Input} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators, FORM_DIRECTIVES} from 'angular2/common';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Feriado} from '../../model';

@Component({
    templateUrl: '../../../view/feriado/feriado.form.html',
    directives: [FORM_DIRECTIVES]
})
export class FeriadoFormComponent {

    @Input() feriado: Feriado;
    form: ControlGroup

    constructor(params:RouteParams, fb: FormBuilder) {
        this.feriado = <Feriado><any>params.get('feriado');
        this.form = fb.group({
            "date": [this.feriado ? this.feriado.date.toISOString() : '', Validators.required],
            "name": [this.feriado ? this.feriado.name : '', Validators.required]
        });
    }

    salvar(value) {
        var f = this.form.value;
        if (!this.feriado) {
            this.feriado = new Feriado(0, new Date(), "");
        }
        this.feriado.date = new Date(f.date.split("-"));
        this.feriado.name = f.name;
        console.log(this.feriado);
    }
}
