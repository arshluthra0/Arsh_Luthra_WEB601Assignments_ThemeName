import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { DialogOverviewExampleDialog, ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ContentTypeFilterPipe } from '../content-type-filter.pipe';
import { HoverAffectDirective } from '../hover-affect.directive';


@NgModule({
  declarations: [
    ContentCardComponent,
    ContentListComponent,
    ContentDetailComponent,
    ModifyContentComponentComponent,
    ContentTypeFilterPipe,
    HoverAffectDirective,
    DialogOverviewExampleDialog
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContentRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatChipsModule,
    MatDialogModule,
  ]
})
export class ContentModule { }
