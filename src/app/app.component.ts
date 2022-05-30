import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'entrega4pf1';

  data:any=[]; //propiedad que le pasaremos a la lista para llenar la tabla
  dataSubmitted=false; //booleano que usaremos con el ngIf para hacer toggle entre form y lista

  onItemAdd(e:any){
    /* En este metodo se hace un update de la data que además que se modifica el id manualmente por el front */
    let index=1;
    if(this.data.length>0){
      index=this.data.length+1;
      e['id']=index;
      this.data.push(e);
    }else{
      e['id']=index;
      this.data.push(e)
    }
    this.dataSubmitted=true;
  }

  onClickAdd(){
    /*Pasa al formulario y además hace el valor a editar como null*/
    this.dataSubmitted=false;
  }

  onUpdateDeleteAlumnos(el:any){
    /* Una vez editado por el delete, 
    se modifican los ids (para evitar errores en delete) y ademas hace un update del valor de data */
    el.forEach((el:any,index:number)=>{
      el['id']=index+1
    })
    this.data=el;
  }

}
