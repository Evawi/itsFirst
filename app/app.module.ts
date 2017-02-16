import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NavModule }     from './modules/navigation/nav.module';

import { AppComponent }  from './app.component';

//todo сделать сервис для параметров роутинга
@NgModule({
    imports:      [ BrowserModule, FormsModule, NavModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
