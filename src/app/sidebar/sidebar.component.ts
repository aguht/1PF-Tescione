import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() ref1:boolean;
  

  @ViewChild("appcomponent") appcomponent: AppComponent;
  
  nuevoE(){
    this.appcomponent.onClickAdd();
  }

  

  constructor() { }

  ngOnInit(): void {

    
  }

}
