import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Feriado} from '../../model';

@Component({
    selector: '[feriado-list]',
    templateUrl: '../../../view/feriado/feriado.list.html',
    directives: [ROUTER_DIRECTIVES]
})
export class FeriadoListComponent {

    feriados: Array<Feriado>;
    feriadoSelecionado: Feriado;

    constructor() {
        this.feriados = new Array<Feriado>();
        this.feriados.push(new Feriado(1, new Date(2016,0,1), 'Feriado de Ano novo'))
        this.feriados.push(new Feriado(2, new Date(2016,1,8), 'Carnaval (ponto facultativo)'))
        this.feriados.push(new Feriado(3, new Date(2016,1,8), 'Carnaval (ponto facultativo)'))
        this.feriados.push(new Feriado(4, new Date(2016,1,10), 'Quarta-feira de Cinzas (ponto facultativo até as 14 horas)'))
    }

    onSubmit(value) {
        console.log(value);
    }
}
