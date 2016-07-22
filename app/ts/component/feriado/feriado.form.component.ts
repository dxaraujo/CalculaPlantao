import {Component, Input, Inject} from '@angular/core';
import {Validators} from '@angular/common';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormArray, FormBuilder} from '@angular/forms';
import {Router, ActivatedRoute , ROUTER_DIRECTIVES} from '@angular/router';
import {PanelComponent} from '../panel.component';
import {FeriadoService} from '../../service';
import {Feriado} from '../../model';

@Component({
    templateUrl: '../../../view/feriado/feriado.form.html',
    directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class FeriadoFormComponent extends PanelComponent {

    @Input() id: number;
    feriado : Feriado;
    form: FormGroup;

    constructor(
        private route:ActivatedRoute ,
        private router: Router,
        private service:FeriadoService
    ){ super(); }

    ngOnInit() {
        this.route.params.subscribe(params => {
          this.id = Number.parseInt(params['id']);
        });
        if (this.id) {
            this.feriado = this.service.getFeriado(this.id);
        }
        this.form = new FormGroup({
           id: new FormControl(this.feriado ? this.feriado.id   : ''),
           date: new FormControl(this.feriado ? this.feriado.date : '', [<any>Validators.required, ]),
           name: new FormControl(this.feriado ? this.feriado.name : '', [<any>Validators.required, ])
        });
    }

    salvar(value) {
        var f = this.form.value;
        if (this.feriado) {
            this.feriado.date = f.date;
            this.feriado.name = f.name;
        } else {
            this.feriado = new Feriado(0, f.date, f.name);
            this.service.addFeriado(this.feriado);
        }
        this.router.navigate(['/feriado']);
    }
}
