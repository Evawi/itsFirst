import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { DataService }                          from './data.service';

@Component({
    selector: 'my-chartCanvas',
    template: `<div>
        <h3>chartCanvas</h3>
        <h1>test</h1>

        <div id="chartContainer" style="height: 300px; width: 100%;"></div>
    </div>`,
    providers: [DataService]
})
export class ChartCanvasComponent{

    elementRef: ElementRef;
    constructor(private elementRef: ElementRef, private dataService: DataService) {
        this.elementRef = elementRef;
        dataService.getChartData().subscribe(
            data => this.canvasRendar(data),
            err => console.log(err),
            () => console.log("compile"))

    }
    canvasRendar(params){

        var data =  params.data.data.map(function (d) {  d.y =+d.count_uid; if (d.y>2000){console.log("console log",d.x)};if (d.x>9499999999999999){console.log("console logy",d.y)}; return d  });
        console.log()
        var chart = new CanvasJS.Chart("chartContainer", {
            theme: "theme2",//theme1
            title:{
                text: "Basic Column Chart - CanvasJS"
            },
            animationEnabled: true,   // change to true
            zoomEnabled: true,
            data: [
                {
                    // Change type to "bar", "area", "spline", "pie",etc.
                    type: "line",
                    dataPoints: params.data.data
                }
            ]
        });
        chart.render();
    }

}