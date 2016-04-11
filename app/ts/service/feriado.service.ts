import {Injectable} from 'angular2/core';
import {Feriado} from '../model';

@Injectable()
export class FeriadoService {

    feriados: Array<Feriado>;

    ngOnInit() {
        this.feriados = new Array<Feriado>();
        this.addFeriado(new Feriado(0, new Date(2016,0,1), 'Feriado de Ano novo'))
        this.addFeriado(new Feriado(0, new Date(2016,1,8), 'Carnaval (ponto facultativo)'))
        this.addFeriado(new Feriado(0, new Date(2016,1,9), 'Carnaval (ponto facultativo)'))
        this.addFeriado(new Feriado(0, new Date(2016,1,10), 'Quarta-feira de Cinzas (ponto facultativo até as 14 horas)'))
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

    apagarFeriado(id: number) {
        var newFeriados: Array<Feriado> = new Array<Feriado>();
        for(var i = 0; i < this.feriados.length; i++) {
            if (this.feriados[i].id != id) {
                newFeriados.push(this.feriados[i]);
            }
        }
        this.feriados = newFeriados;
    }
}
