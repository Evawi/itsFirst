import { Injectable } from '@angular/core';
import {Http, HTTP_BINDINGS ,Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'npm:rxjs/Observable';
import  'npm:rxjs/add/operator/map'
//import { Main } from './main';
//import { PAGES } from './mock-routing-page';
//должен принимать json с данными графика

@Injectable()
export class DataService {
    constructor(private http: Http) {
       /* http.get('test.json')
            .map(res => res.json())
            .subscribe(data => this.data = data,
                err => console.log(err),
                () => console.log('Completed'));*/

    }
    getChartData():Observable<[]>{
        return this.http.request('../../no-ff.json')
            .map(this.extractData);


    };/**/
    getMoreLineChartData():Observable<[]>{
        return this.http.request('../../more-line.json')
            .map(this.extractData);
    };
    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }
}