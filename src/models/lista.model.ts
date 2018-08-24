import { ListaItems } from "./lista-items.model";

export class Lista {
  id: number;
  titulo: string;
  creadaEn: Date;
  terminadaEn: Date;
  terminada: boolean;
  items: Array<ListaItems>

  constructor (titulo: string){
    this.titulo = titulo;
    this.creadaEn = new Date();
    this.terminada = false;
    this.items = [];
    // Con getTime obtenemos un valor "único"
    this.id = new Date().getTime();
  }
}