import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Alumno } from './alumno.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() alumnos:Alumno[];
  displayedColumns=['estudiante', 'dni', 'curso', 'delete'];
  @ViewChild('table') table: MatTable<any>;
  nombreApellido: string;

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteElement(el:any){
    /* Se busca el elemento por el id en el array de alumnos,
    Se elimina por el index, y luego usando el ViewChild, se renderiza de nuevo la tabla.
    Por ultimo, emitimos el valor de alumnosUpdated al padre */
    let index=this.alumnos.findIndex(x=> x.id===el.id);
    this.alumnos.splice(index,1);
    this.table.renderRows();
  }

}
