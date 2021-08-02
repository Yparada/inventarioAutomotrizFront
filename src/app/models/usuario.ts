import { Cargo } from "./cargo";

export class Usuario {
  id?: number;
  nombre: string;
  edad: number;
  cargo: Cargo;
  fechaIngreso: Date;

  constructor(nombre: string, edad: number, cargo: Cargo, fechaIngreso: Date){
    this.nombre = nombre;
    this.edad = edad;
    this.cargo = cargo;
    this.fechaIngreso = fechaIngreso;
  }

}
