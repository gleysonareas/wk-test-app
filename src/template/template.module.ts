import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/components/components.module';
import { NavTemplate } from './nav/nav.template';
import { HeaderTemplate } from './header/header.template';
import { FooterTemplate } from './footer/footer.template';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    HeaderTemplate,
    NavTemplate,
    FooterTemplate,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule,
  ],
  exports: [
    HeaderTemplate,
    NavTemplate,
    FooterTemplate,
  ],
})
export class TemplateModule { }
