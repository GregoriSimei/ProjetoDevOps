import { Data } from '@angular/router';
import { Transacao } from './Transacao';

export class Compra {
    _id?: string;
    userId: String;
    criadoEm?: Date;
    valor?: number;
    transacoes: Transacao[];
}