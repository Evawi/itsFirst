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
        <div id="chart">
        <svg width="1760" height="500"></svg>
        </div>

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


    d3Chart(data, param){


        /*var data = [
            {"x": "payday loans", "count_uid": 1400000, "local": 673000, "cpc": "14.11"},
            {"x": "title loans", "count_uid": 165000, "local": 160000, "cpc": "12.53" },
            {"x": "personal loans", "count_uid": 550000, "local": 301000, "cpc": "6.14"},
            {"x": "online personal loans", "count_uid": 15400, "local": 12900, "cpc": "5.84"},
            {"x": "online title loans", "count_uid": 111600, "local": 11500, "cpc": "11.74"}
        ];*/

        var xArr = data.map(function (d) {return d.x; });
        console.log(xArr.length)
        var selectedObj = null;
        if (param.target === null || param.target === undefined) { parentSelector = "body"; };
        selectedObj = d3.select(param.target);
        if (selectedObj.empty()) {
            throw "The '" + param.target + "' selector did not match any elements.  Please prefix with '#' to select by id or '.' to select by class";
        };

        console.log("selectedObj :", selectedObj)
        //отступы
        var margin = {top: 30, right: 40, bottom: 30, left: 50},
            width = 1760 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;
        console.log("margin :", margin)

        //шкалы рисуем длину  и высоту
       // var xScale = d3.scaleLinear().range([0, width]);
        var xScale = d3.scaleBand().rangeRound([0, width], 0.05);
        var yScale = d3.scaleBand().rangeRound([margin.left, height], 0.05);
        //var xScale = d3.time.scale().range([0, width]);

        //связываем шкалы с данными
       // xScale.domain([d3.min(data, function(d) { return d.x; }),        d3.max(data, function(d) { return d.x; })]); //задать min - max массив x
        //yScale.domain([d3.min(data, function(d) { return d.count_uid; }),d3.max(data, function(d) { return d.count_uid; })]);
        xScale.domain(xArr);
        yScale.domain(data.map(function (d) {return d.count_uid; }));


        console.log("xScale/yScale :", xArr)
        //yScaleRight.domain([0,d3.max(data, function(d) { return d[param.series[1].yColumn]; })]);

        //настраиваем оси(подписи на шкалах)
       /* var xAxis = d3.svg.axis().scale(xScale).orient("bottom")
            .ticks(d3.time.year,1).tickFormat(d3.time.format("%Y"))
            .tickSize(10);
        var monthNameFormat = d3.time.format("%m");
        var xAxis2 = d3.svg.axis().scale(xScale).orient("bottom")
            .ticks(d3.time.month,2).tickFormat(function(d) { var a = monthNameFormat(d); if (a == "01") {a = ""}; return a;})
            .tickSize(2);
        var yAxisLeft = d3.svg.axis().scale(yScaleLeft).orient("left");
       // var yAxisRight = d3.svg.axis().scale(yScaleRight).orient("right");

*/
        var svg = selectedObj.select("svg"),
            margin = {top: 30, right: 40, bottom: 30, left: 50},
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom;


        // outer border
       /* svg.append("rect").attr({width: width, height: height})
            .style({"fill": "none", "stroke": "#ccc"});
*/
        // create group in svg for generate graph
        var xAxis = d3.axisBottom(xScale).tickValues(xArr);
        var yAxis = d3.axisLeft(yScale);

        var g = svg.append("g").attr("transform", "translate("+ margin.left +",0)");

        g.append("g") .attr("transform", "translate(0," + height + ")")
            .call(xAxis);/**/
        g.append("g") .call(yAxis)
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end");

       // var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // add title
       /*

        g.append("g")
            .call(d3.axisBottom(xScale).tickValues(xArr))
            .append("text").attr("x", margin.left)
            .attr("y", 0 - (margin.top / 2))
            .attr("text-anchor", "middle").style("font-size", "14px")
            .text("x");*/

        /*g.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .append("text")
            .attr("x", width-20).attr("dx", ".71em")
            .attr("y", -4).style("text-anchor", "end")
            .text(param.xColumn);

        g.append("g").attr("class", "x axis2").attr("transform", "translate(0," + height + ")")
            .call(xAxis2);
        g.append("g").attr("class", "y axis")
            .call(yAxisLeft)
            .append("text").attr("transform", "rotate(-90)")
            .attr("y", 6).attr("dy", ".71em").style("text-anchor", "end")
            .text(param.yLeftAxisName);
        g.append("g").attr("class", "y axis").attr("transform", "translate(" + width + " ,0)")
            .call(yAxisRight)
            .append("text").attr("transform", "rotate(-90)")
            .attr("y", -14).attr("dy", ".71em").style("text-anchor", "end")
            .text(param.yRightAxisName);
    */
        var line = d3.line()
            .x(function(d) { return xScale(d.x); })
            .y(function(d) { return yScale(d.count_uid); });

        g.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("d", line);


         var x = [];
        var y = [];
        data.forEach(function(d, i) {
            //console.log(d)
            x.push(d.x);
            y.push(d.count_uid)

            /*g.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr("stroke-width", 1.5)
                .attr("d", line);
*/
           /*for (var i = 0, len = param.categories.length; i < len; i += 1) {

                if (param.categories[i].name == d.key){
                    for (var j = 0, len1 = param.series.length; j < len1; j += 1) {
                        if (param.series[j].yAxis == "left"){
                            // init line for left axis
                            var line = d3.svg.line()
                                .x(function(d) { return xScale(d[param.xColumn]); })
                                .y(function(d) { return yScaleLeft(d[param.series[j].yColumn] ); });
                        };
                        if (param.series[j].yAxis == "right"){
                            // init line for right axis
                            var line = d3.svg.line()
                                .x(function(d) { return xScale(d[param.xColumn]); })
                                .y(function(d) { return yScaleRight(d[param.series[j].yColumn] ); });
                        };
                        // draw line
                        g.append("path").datum(d.values)
                            .style({"fill": "none", "stroke": param.series[j].color, "stroke-width": param.categories[i].width})
                            .attr("d", line);
                    };
                };
            }*/
        }); /**/
    }

    getData(data){

        var nest = d3.nest().key(function (d) {
            return d.x;
        }).entries(data.data.data);
        console.log("nest",nest)

        var x = [];
        var y = [];

        this.d3Chart(data.data.data,{
            target:"#chart"
        });


        console.log("getData",data.data.data);
        return

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

        console.log(d3.extent(data.data.data, function(d) { return d.x; }),y);



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
            .attr("d", line);/**/

        }

    }
