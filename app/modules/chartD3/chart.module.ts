import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ChartComponent }         from './chart.component';

//DESCR: инит d3

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ ChartComponent ],
    bootstrap:    [ ChartComponent ],
    exports:      [ ChartComponent ]
})
export class ChartModule {

}