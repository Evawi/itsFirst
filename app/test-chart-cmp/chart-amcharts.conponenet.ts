import { Component } from '@angular/core';
//import { NavModule }     from './modules/navigation/nav.module';
@Component({
    selector: 'chart-amcharts-app',
    template: `<label>График Amcharts</label>
               <my-chartAmcharts></my-chartAmcharts>`
})
export class ChartAmchartsComponent {
    name= '';
}