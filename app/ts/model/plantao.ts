import {Instituicao} from './instituicao';
import {Turno} from './turno';

export class Plantao {
    constructor(
        public id: number,
        public date: Date,
        public turno: Turno,
        public instituicao: Instituicao,
        public valor: number,
        public pago: boolean
    ) { }
}
