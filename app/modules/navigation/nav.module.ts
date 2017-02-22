import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { RoutingService }       from '../../routing.service';
import { NavComponent }         from './nav.component';

//DESCR: переключает страницы, меняет стейт пунктов меню, меняет стейт отображения меню при необходимости(меню главной/меню остальное, меню развернуто/меню скрыто)

@NgModule({
    imports:      [ BrowserModule, FormsModule,RouterModule.forRoot([]) ],
    declarations: [ NavComponent ],
    bootstrap:    [ NavComponent ],
    exports:      [ NavComponent ],
    providers:    [ RoutingService ]
})
export class NavModule {

}