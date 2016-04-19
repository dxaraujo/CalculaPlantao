import {Injectable} from 'angular2/core';
import {Feriado} from '../model';

@Injectable()
export class FeriadoService {

    feriados: Array<Feriado> = new Array<Feriado>();

    constructor() {
        this.addFeriado(new Feriado(0, new Date(2016, 0, 1), 'Feriado de Ano novo'))
        this.addFeriado(new Feriado(0, new Date(2016, 1, 8), 'Carnaval (ponto facultativo)'))
        this.addFeriado(new Feriado(0, new Date(2016, 1, 9), 'Carnaval (ponto facultativo)'))
        this.addFeriado(new Feriado(0, new Date(2016, 1, 10), 'Quarta-feira de Cinzas (ponto facultativo até as 14 horas)'))
    }

    getFeriados() {
        return this.feriados;
    }

    getFeriado(id: number) {
        return this.feriados.find((value, index, obj) => {
            return (value.id == id)
        });
    }

    addFeriado(feriado: Feriado) {
        let id = this.feriados.length + 1;
        feriado.id = id;
        this.feriados.push(feriado);
    }

    apagarFeriado(id: number) {
        let index: number =  this.feriados.findIndex(value => {
            return (value.id == id)
        });
        if (index >= 0) {
            this.feriados.splice(index, 1);
        }
    }
}
