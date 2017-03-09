import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { ChartCanvasComponent } from './chart.component';

//DESCR: инит d3

@NgModule({
    imports:      [ BrowserModule,HttpModule, FormsModule ],
    declarations: [ ChartCanvasComponent ],
    bootstrap:    [ ChartCanvasComponent ],
    exports:      [ ChartCanvasComponent ]
})
export class ChartCanvasModule {

}
