import { Component } from '@angular/core';
//import { NavModule }     from './modules/navigation/nav.module';
@Component({
    selector: 'chart-app',
    template: `<label>График</label>
                <my-chartD3></my-chartD3>`
})
export class ChartComponent {
    name= '';
}