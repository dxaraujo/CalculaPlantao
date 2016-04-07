import {Imposto} from './imposto';

export class ImpostoCobrado {
    constructor(
        public id: number,
        public imposto: Imposto,
        public aliquota: number,
        public status: boolean
    ) { }
}
