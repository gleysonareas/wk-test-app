import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item-component/menu-item.component';
import { DialogComponent } from './dialog-component/dialog.component';
import { ExpansionPanelComponent } from './expansion-panel-component/expansion-panel.component';
import { ListComponent } from './list-component/list.component';
import { TabNavComponent } from './tab-nav-component/tab-nav.component';
import { ToolbarComponent } from './toolbar-component/toolbar.component';
import { CardComponent } from './card-component/card.component';
@NgModule({
  declarations: [
    MenuItemComponent,
    TabNavComponent,
    ToolbarComponent,
    DialogComponent,
    ListComponent,
    CardComponent,
    ExpansionPanelComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuItemComponent,
    TabNavComponent,
    ToolbarComponent,
    DialogComponent,
    ListComponent,
    CardComponent,
    ExpansionPanelComponent,
  ]
})
export class ComponentsModule { }
