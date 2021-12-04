import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { TabNavComponent } from './tab-nav/tab-nav.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { ListComponent } from './list/list.component';
import { DialogComponent } from './dialog/dialog.component';
import { CardComponent } from './card/card.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { ClientComponent } from './client/client.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [										
    AppComponent,
      ToolbarComponent,
      ListMenuComponent,
      TabNavComponent,
      MenuListComponent,
      ListComponent,
      DialogComponent,
      CardComponent,
      ExpansionPanelComponent,
      ClientComponent,
      ProductComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
