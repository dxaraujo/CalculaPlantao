import {Component, Input, Inject} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators, FORM_DIRECTIVES} from 'angular2/common';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {FeriadoService} from '../../service';
import {Feriado} from '../../model';

@Component({
    templateUrl: '../../../view/feriado/feriado.form.html',
    directives: [FORM_DIRECTIVES],
    providers: [FeriadoService]
})
export class FeriadoFormComponent {

    @Input() id: number;
    feriado : Feriado;
    form: ControlGroup;
    router: Router;

    constructor(public feriadoService: FeriadoService, router:Router, params:RouteParams, fb: FormBuilder) {
        this.router = router;
        this.id = <number><any>params.get('id');
        if (this.id) {
            this.feriado = this.feriadoService.getFeriado(this.id);
        }
        this.form = fb.group({
            "id":   [this.feriado ? this.feriado.id   : ''],
            "date": [this.feriado ? this.feriado.date.toISOString().split("T")[0] : '', Validators.required],
            "name": [this.feriado ? this.feriado.name : '', Validators.required]
        });
    }

    salvar(value) {
        var f = this.form.value;
        if (!this.feriado) {
            this.feriado = new Feriado(0, new Date(), '');
        }
        this.feriado.date = new Date(f.date.split("-"));
        this.feriado.name = f.name;
        this.router.navigate(['Feriado']);
        this.feriadoService.addFeriado(this.feriado);
    }
}
