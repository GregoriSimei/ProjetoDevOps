import { Produto } from './Produto';

export class Transacao {
    id?: string;
    cnpjFarmacia: String;
    qtd: number;
    status?: string;
    produto: Produto;
    userId?: string;
}