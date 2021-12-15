import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog-component/dialog.component';
import { ExpansionPanelComponent } from './expansion-panel-component/expansion-panel.component';
import { ListComponent } from './list-component/list.component';
import { TabNavComponent } from './tab-nav-component/tab-nav.component';
import { ToolbarComponent } from './toolbar-component/toolbar.component';
import { CardComponent } from './card-component/card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    ToolbarComponent,
    TabNavComponent,
    DialogComponent,
    ListComponent,
    CardComponent,
    ExpansionPanelComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ToolbarComponent,
    TabNavComponent,
    DialogComponent,
    ListComponent,
    CardComponent,
    ExpansionPanelComponent,
  ]
})
export class ComponentsModule { }
