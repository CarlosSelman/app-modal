import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ng-modal-lib';
import { MultipleDraggableModalsModule } from 'multiple-draggable-modals';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { ExampleModalComponent } from './example-modal/example-modal.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ExampleModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    MultipleDraggableModalsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
