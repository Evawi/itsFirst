import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { DataService }                          from './data.service';

@Component({
    selector: 'my-chartD3',
    template: `<div>
        <h3>D3</h3>
        <h1>test</h1>
        <form>
  <label><input type="radio" name="mode" value="grouped"> Grouped</label>
  <label><input type="radio" name="mode" value="stacked" checked> Stacked</label>
</form>
        <svg width="960" height="500"></svg>
    </div>`,
    providers: [DataService]
})
export class ChartComponent{

    elementRef: ElementRef;
    constructor(private elementRef: ElementRef, private dataService: DataService) {
        this.elementRef = elementRef;
        dataService.getChartData().subscribe(
            data => this.getData(data),
            err => console.log(err),
            () => console.log("compile"))

    }
    /*getData(data){
        console.log("getData",data);

    }*/
    getData(data){
        console.log("getData",data.data.data);

        console.log("afterViewInit() called",this);
        var h3 = this.elementRef.nativeElement.querySelector('h3');
        console.log(h3,d3);

        var xArr = [];
        var yArr = [];
        data.data.data.forEach(function(x) {
            xArr.push(x.x);
            yArr.push(x.count_uid);
        });

        console.log( "xArr",xArr )

        var svg = d3.select("svg")
            //.append("svg")
            .data(data.data.data)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");


    }

}