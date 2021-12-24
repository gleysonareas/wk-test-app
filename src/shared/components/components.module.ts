import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FieldValidationComponent } from './field-validation-component/field-validation.component';
import { ExpansionPanelComponent } from './expansion-panel-component/expansion-panel.component';
import { ToolbarComponent } from './toolbar-component/toolbar.component';
import { DialogComponent } from './dialog-component/dialog.component';
import { TabNavComponent } from './tab-nav-component/tab-nav.component';
import { ButtomComponent } from './buttom-component/buttom.component';
import { ListComponent } from './list-component/list.component';
import { CardComponent } from './card-component/card.component';


@NgModule({
  declarations: [
    FieldValidationComponent,
    ExpansionPanelComponent,
    ToolbarComponent,
    TabNavComponent,
    DialogComponent,
    ButtomComponent,
    ListComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,

  ],
  exports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    FieldValidationComponent,
    ExpansionPanelComponent,
    ToolbarComponent,
    TabNavComponent,
    CardComponent,

    //Serão implementados depois
    // DialogComponent,
    // ButtomComponent,
    // ListComponent,
  ]
})
export class ComponentsModule { }
