import { Component } from '@angular/core';
import { RoutingService }       from '../../routing.service';

@Component({
    selector: 'my-navigator',
    template: `<div>
    <!--<a *ngFor="let item of items" href="{{item.href}}">{{item.name}}</a>-->
    <a routerLink="/">Home</a>
    <a routerLink="/chart">ChartD3 Test</a>
    <a routerLink="/chartCanvas">ChartCanvas Test</a>
    <a routerLink="/chartAmcharts">ChartAmcarts Test</a>
    </div>`,
    providers:    [ RoutingService ]
})
export class NavComponent implements OnInit{
    name= '';
    items:[];
    constructor(routingService: RoutingService) {
        //console.log("routingServicegetStorage",routingService.getStorage())
        //this.items = this.routingService.getStorage()

    }

    ngOnInit(){
      // console.log("ngOnInit routingService",routingService)
        /*console.log("routingService",this.routingService)
        this.items = this.routingService.getStorage();*/
    }
}