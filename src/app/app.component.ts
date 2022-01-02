import { Component, OnInit, ViewChild } from '@angular/core';

import { MultipleDraggableModalsComponent } from 'multiple-draggable-modals';
import { ExampleModalComponent } from './example-modal/example-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  @ViewChild(MultipleDraggableModalsComponent)
  modals!: MultipleDraggableModalsComponent; // <--
 // <--

  constructor(){}
  ngOnInit(){
  }

  OpenModal(){
    this.modals.AddModal("Example Modal" ,ExampleModalComponent,{Name:'MyName', ArrayOfData:[1,2,3,4]},false,true,true,false,{Top:"10%", Left:"10%"});
    console.log(this.modals.ModalsArray);
  }
  RemoveAll(){
    this.modals.RemoveAll();
  }
}


