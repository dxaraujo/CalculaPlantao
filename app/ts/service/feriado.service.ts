import {Injectable} from 'angular2/core';
import {Feriado} from '../model';

@Injectable()
export class FeriadoService {

    feriados: Array<Feriado>;

    constructor() {
        this.feriados = new Array<Feriado>();
        this.feriados.push(new Feriado(1, new Date(2016,0,1), 'Feriado de Ano novo'))
        this.feriados.push(new Feriado(2, new Date(2016,1,8), 'Carnaval (ponto facultativo)'))
        this.feriados.push(new Feriado(3, new Date(2016,1,8), 'Carnaval (ponto facultativo)'))
        this.feriados.push(new Feriado(4, new Date(2016,1,10), 'Quarta-feira de Cinzas (ponto facultativo até as 14 horas)'))
    }

    getFeriados() {
        return this.feriados;
    }

    getFeriado(id: number) {
        for(var i = 0; i < this.feriados.length; i++) {
            if (this.feriados[i].id == id) {
                return this.feriados[i];
            }
        }
    }

    addFeriado(feriado: Feriado) {
        var id = this.feriados.length + 1;
        feriado.id = id;
        this.feriados.push(feriado);
    }
}
