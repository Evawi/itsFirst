import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { ChartAmchartsComponent } from './chart.component';

//DESCR: инит d3

@NgModule({
    imports:      [ BrowserModule,HttpModule, FormsModule ],
    declarations: [ ChartAmchartsComponent ],
    bootstrap:    [ ChartAmchartsComponent ],
    exports:      [ ChartAmchartsComponent ]
})
export class ChartAmchartsModule {

}
