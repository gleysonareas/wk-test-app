import { NgModule } from '@angular/core';
import { NavTemplate } from './nav/nav.template';
import { HeaderTemplate } from './header/header.template';
import { FooterTemplate } from './footer/footer.template';
import { PagesModule } from './../../app/pages/pages.module';

@NgModule({
  declarations: [
    HeaderTemplate,
    NavTemplate,
    FooterTemplate,
  ],
  imports: [
    PagesModule,
  ],
  exports: [
    PagesModule,
    HeaderTemplate,
    NavTemplate,
    FooterTemplate,
  ],
})
export class TemplateModule { }
