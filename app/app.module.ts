import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { RoutingService }       from './routing.service';

import { NavModule }       from './modules/navigation/nav.module';
import {ChartModule}       from './modules/chartD3/chart.module';

import { AppComponent }    from './app.component';
import { HomeComponent }   from './home-cmp/home.component';
import { ChartComponent }  from './test-chart-cmp/chart.component';


const appRoutes: Routes = [
    { path: '',      component: HomeComponent, href:"/" ,name:"Home"},
    { path: 'chart', component: ChartComponent, href:"/chart",name:"Chart" },
    { path: '**',    component: HomeComponent, href:"/" ,name:"Home" },
];

//todo сделать сервис для параметров роутинга
//todo роутинг
@NgModule({
    imports:      [
        BrowserModule,
        FormsModule
        ,RouterModule.forRoot(appRoutes)
        , NavModule,
        ChartModule
        ],
    declarations: [
        AppComponent,
        HomeComponent,
        ChartComponent
    ],
    bootstrap:    [ AppComponent ],
    providers:    [ RoutingService ]
})
export class AppModule {
    constructor(routingService: RoutingService) {
        routingService.setStorage(appRoutes);
    }
}
