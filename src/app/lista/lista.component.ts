import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Alumno } from './alumno.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() alumnos:Alumno[];
  @Output() alumnoToEdit= new EventEmitter<Alumno>(); //pasamos el Alumno con alumnos a editar en el form, al component app
  @Output() alumnosUpdated = new EventEmitter<Alumno[] | null>(); //array de alumnos editado al component padre por delete
  displayedColumns=['estudiante', 'dni', 'curso', 'delete'];
  @ViewChild('table') table: MatTable<any>;
  nombreApellido: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClickRow(el:Alumno){
    /*Le avisa al componente padre el elemento a editar*/
    this.alumnoToEdit.emit(el);
  }

  onDeleteElement(el:any){
    /* Se busca el elemento por el id en el array de alumnos,
    Se elimina por el index, y luego usando el ViewChild, se renderiza de nuevo la tabla.
    Por ultimo, emitimos el valor de alumnosUpdated al padre */
    let index=this.alumnos.findIndex(x=> x.id===el.id);
    this.alumnos.splice(index,1);
    this.table.renderRows();
    this.alumnosUpdated.emit(this.alumnos);
  }

}
