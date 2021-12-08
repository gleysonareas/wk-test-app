import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from 'src/components/components.module';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    PagesComponent,
  ]
})
export class PagesModule { }
