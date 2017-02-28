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
        <svg width="1760" height="500"></svg>
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

        var svg = d3.select("svg"),
            margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom,
            g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var parseTime = d3.timeParse("%d-%b-%y");

        var x = d3.scaleTime()
            .rangeRound([0, width]);

        var y = d3.scaleLinear()
            .rangeRound([height, 0]);

        var line = d3.line()
            .x(function(d) { return x(d.x); })
            .y(function(d) { return y(d.count_uid); });


        x.domain(d3.extent(data.data.data, function(d) { return d.x; }));
        y.domain(d3.extent(data.data.data, function(d) { return d.count_uid; }));
        console.log(d3.extent(data.data.data, function(d) { return d.x; }),y)
        g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .select(".domain")
            .remove();

        g.append("g")
            .call(d3.axisLeft(y))
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end");

        g.append("path")
            .datum(data.data.data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("d", line);


        }

    }
