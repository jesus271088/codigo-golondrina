import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChecarArrayPipe } from './pipe/checar-array.pipe';
import { NgclassComponent } from './directiva/ngclass/ngclass.component';

@NgModule({
  declarations: [
    AppComponent,
    ChecarArrayPipe,
    NgclassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
