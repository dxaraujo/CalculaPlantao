import {Component, Input} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators, FORM_DIRECTIVES} from 'angular2/common';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Feriado} from '../../model';

@Component({
    templateUrl: '../../../view/feriado/feriado.form.html',
    directives: [FORM_DIRECTIVES]
})
export class FeriadoFormComponent {

    @Input() id: number;
    form: ControlGroup

    constructor(params:RouteParams, fb: FormBuilder) {
        this.id = <number><any>params.get('id');
        console.log(`Chegou o id: ${this.id}`);
        this.form = fb.group({
            "id": [this.id ? this.id : '', Validators.required],
            "date": ['', Validators.required],
            "name": ['', Validators.required]
        });
    }

    salvar(value) {
        var f = this.form.value;
        console.log(f);
    }
}
