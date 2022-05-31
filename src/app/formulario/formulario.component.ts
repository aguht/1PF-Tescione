import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from '../lista/alumno.interface';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  alumnoForm:FormGroup;

  @Input() alumnoToEdit:Alumno|null;
  @Output() itemAdded = new EventEmitter<any>(); //item añadido por el form
  @Output() itemEdited = new EventEmitter<any>();


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    /*Se define el formulario y en caso de que sea un edit por el alumnoToEdit
    Se llenan los valores de formularios con un patchValue*/
    this.alumnoForm=this.fb.group({
      nombreAlumno:['', Validators.required],
      apellidoAlumno:['', Validators.required],
      dniAlumno:['', Validators.required],
      cursoAlumno:['', Validators.required]
    })

    if(this.alumnoToEdit){
      this.alumnoForm.get('nombreAlumno')?.patchValue(this.alumnoToEdit.nombre);
      this.alumnoForm.get('apellidoAlumno')?.patchValue(this.alumnoToEdit.apellido);
      this.alumnoForm.get('dnialumno')?.patchValue(this.alumnoToEdit.dni);
      this.alumnoForm.get('cursoAlumno')?.patchValue(this.alumnoToEdit.curso);
    }
  }

  onSubmit(){
    /*Evalua si el elemento es nuevo o a editar, si es nuevo => emite itemAdded.
    Si es a editar emite el itemEdited*/
    if(!this.alumnoToEdit){
      this.itemAdded.emit(this.alumnoForm.value);
    }else{
      this.alumnoForm.value['id']=this.alumnoToEdit.id
      let vendedorEdited=this.alumnoForm.value;
      this.itemEdited.emit(vendedorEdited);
    
  }}

}
