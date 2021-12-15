import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
})
export class SharedModule { }
