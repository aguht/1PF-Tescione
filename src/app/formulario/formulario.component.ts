import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  alumnoForm:FormGroup;
  @Output() itemAdded = new EventEmitter<any>(); //item añadido por el form 


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    /*Se define el formulario y en caso de que sea un edit por el vendedorToEdit
    Se llenan los valores de formularios con un patchValue*/
    this.alumnoForm=this.fb.group({
      nombreAlumno:['', Validators.required],
      apellidoAlumno:['', Validators.required],
      dniAlumno:['', Validators.required],
      cursoAlumno:['', Validators.required]
    })
  }

  onSubmit(){
    /*Evalua si el elemento es nuevo o a editar, si es nuevo => emite itemAdded.
    Si es a editar emite el itemEdited*/
      this.itemAdded.emit(this.alumnoForm.value);
    
  }

}
