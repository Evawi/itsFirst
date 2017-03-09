import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { DataService }                          from './data.service';
import forEach = ts.forEach;

@Component({
    selector: 'my-chartAmcharts',
    template: `<div>
        <h3>chartAmcharts</h3>
        <h1>test</h1>
        <div id="amchartchartdiv" style="height: 300px; width: 100%;"></div>
        <div id="amchartchartdivmore-line-stacked" style="height: 600px; width: 100%;"></div>
        <div id="amchartchartdivmore-line" style="height: 600px; width: 100%;"></div>

    </div>`,
    providers: [DataService]
})
export class ChartAmchartsComponent{

    elementRef: ElementRef;
    constructor(private elementRef: ElementRef, private dataService: DataService) {
        this.elementRef = elementRef;
        dataService.getChartData().subscribe(
            data => this.amchartsRendar(data),
            err => console.log(err),
            () => console.log("compile"))
        dataService.getMoreLineChartData().subscribe(
            data => this.amchartsMoreLineRendarStacked(data),
            err => console.log(err),
            () => console.log("compile"))
        dataService.getMoreLineChartData().subscribe(
            data => this.amchartsMoreLineRendar(data),
            err => console.log(err),
            () => console.log("compile"))


    }
    amchartsMoreLineRendarStacked(params){
        console.log("amchartsMoreLineRendarStacked",params)
        var graphs=[];
        params.data.lines.forEach(function(d, i) {

            var en ={
                //"id": "g"+i,
                "balloonText": "[[value]]",
                "connect": false,
                //"bullet": "round",
                "fillAlphas": 0.6,
                //"hidden": true,
                "lineAlpha": 0.4,
                "title": d,
                "valueField": d,
               // "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
            };
            graphs.push(en)
        });
        var chart = AmCharts.makeChart("amchartchartdivmore-line-stacked", {
            "type": "serial",
            "theme": "light",
            "legend": {
                "align": "center",
                "equalWidths": false,
                "periodValueText": "total: [[value.sum]]",
                "valueAlign": "left",
                "valueText": "[[value]] ([[percents]]%)",
                "valueWidth": 100
            },
            "dataProvider":params.data.data,
            "valueAxes": [{
                "stackType": "regular",
                "gridAlpha": 0.07,
                "position": "left",
                "title": "Traffic incidents"
            }],
            "chartScrollbar": {
                "autoGridCount": true,
                "graph": "g1",
                "scrollbarHeight": 40
            },
            "graphs":graphs,
            "plotAreaBorderAlpha": 0,
            "marginLeft": 0,
            "marginBottom": 0,
            "chartCursor": {
                "cursorAlpha": 0
            },
            "categoryField": "x",
            "categoryAxis": {
                "startOnAxis": true,
                "axisColor": "#DADADA",
                "gridAlpha": 0.07,
                "equalSpacing":true
            }
        })
    }
    amchartsMoreLineRendar(params){
        console.log(params)
        var graphs=[];
        params.data.data.forEach(function(d, i) {
            console.log(d["l10n"])
        })
        params.data.lines.forEach(function(d, i) {

            var en ={
                "id": "g"+i,
                "balloon":{
                    "drop":true,
                    "adjustBorderColor":false,
                    "color":"#ffffff"
                },
                "fillAlphas": 0.5,
                "connect": false,
                "lineAlpha": 0.5,
                "balloonText": "[[value]]",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "bulletSize": 5,
                "hideBulletsCount": 50,
                "lineThickness": 2,
                "title": d,
                "useLineColorForBulletBorder": true,
                "valueField": d,
                "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
            };
            graphs.push(en)
        });
        var chart = AmCharts.makeChart("amchartchartdivmore-line", {
            "type": "serial",
            "theme": "light",
            "titles": [{
                "text": "Traffic incidents per year",
                "size": 15
            }],
            "legend": {
                "align": "center",
                "equalWidths": false,
                "periodValueText": "total: [[value.sum]]",
                "valueAlign": "left",
                "valueText": "[[value]] ([[percents]]%)",
                "valueWidth": 100
            },
            "dataProvider":params.data.data,
            "valueAxes": [{
                "stackType": "100%",
                "gridAlpha": 0.07,
                "position": "left",
                "title": "percent"
            }],
            "graphs":graphs,
            "plotAreaBorderAlpha": 0,
            "marginLeft": 0,
            "marginBottom": 0,
            "chartCursor": {
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "x",
            "categoryAxis": {
                "startOnAxis": true,
                "axisColor": "#DADADA",
                "gridAlpha": 0.07
            },
            "export": {
                "enabled": true
            }
        })
    }
    amchartsRendar(params){
        var graphs=[];
        params.data.lines.forEach(function(d, i) {
            var en ={
                "id": "g"+i,
                "balloonText": "[[value]]",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "hideBulletsCount": 50,
                "title": d,
                "useLineColorForBulletBorder": true,
                "valueField": d,
                "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
            };
            graphs.push(en)
        })
        var chart = AmCharts.makeChart("amchartchartdiv", {
            "type": "serial",
            "theme": "light",
            "marginRight": 40,
            "marginLeft": 40,
            "autoMarginOffset": 20,
            "mouseWheelZoomEnabled":true,
            "valueAxes": [{
                "axisAlpha": 0.2,
                "dashLength": 1,
                "position": "left"
            }],
            "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
            },
            "chartScrollbar": {
                "autoGridCount": true,
                "graph": "g1",
                "scrollbarHeight": 40
            },
            "chartCursor": {
                "limitToGraph":"g1"
            },
            "graphs": graphs,
            "balloon": {},
            "categoryField": "x",
            "dataProvider": params.data.data
        })
    }

}