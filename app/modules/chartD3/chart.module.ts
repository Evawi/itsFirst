import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { ChartComponent }         from './chart.component';

//DESCR: инит d3

@NgModule({
    imports:      [ BrowserModule,HttpModule, FormsModule ],
    declarations: [ ChartComponent ],
    bootstrap:    [ ChartComponent ],
    exports:      [ ChartComponent ]
})
export class ChartModule {

}