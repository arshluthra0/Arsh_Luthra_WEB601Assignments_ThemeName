import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentListComponent } from './content-list/content-list.component';
import { MovietypePipe } from './movietype.pipe';
import { HoverEffectDirective } from './directive/hover-effect.directive';
import { CreateContentComponent } from './create-content/create-content.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    MovietypePipe,
    HoverEffectDirective,
    CreateContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
