import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UniversiteListComponent } from './components/universite-list/universite-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversiteListComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
