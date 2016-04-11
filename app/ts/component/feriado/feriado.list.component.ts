import {Component, Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {FeriadoService} from '../../service';
import {Feriado} from '../../model';

@Component({
    templateUrl: '../../../view/feriado/feriado.list.html',
    directives: [ROUTER_DIRECTIVES]
})
export class FeriadoListComponent {

    feriados : Array<Feriado>;

    constructor(
        private _service: FeriadoService
    ) {}

    ngOnInit() {
        this.feriados = this._service.getFeriados();
    }

    apagarFeriado(id) {
        this._service.apagarFeriado(id);
        this.feriados = this._service.getFeriados();
    }
}
