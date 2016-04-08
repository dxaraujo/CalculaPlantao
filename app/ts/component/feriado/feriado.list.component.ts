import {Component, Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {FeriadoService} from '../../service';
import {Feriado} from '../../model';

@Component({
    templateUrl: '../../../view/feriado/feriado.list.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [FeriadoService]
})
export class FeriadoListComponent {

    feriados : Array<Feriado>;

    constructor(public feriadoService: FeriadoService) {
        this.feriados = this.feriadoService.getFeriados();
    }

    apagarFeriado(feriado) {
        console.log(feriado);
    }
}
