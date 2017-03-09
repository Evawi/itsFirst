import { Component } from '@angular/core';
//import { NavModule }     from './modules/navigation/nav.module';
@Component({
    selector: 'chart-canvas-app',
    template: `<label>График</label>
                <my-chartCanvas></my-chartCanvas>`
})
export class ChartCanvasComponent {
    name= '';
}