import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { NavModule }     from './modules/navigation/nav.module';

import { AppComponent }  from './app.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule, NavModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }