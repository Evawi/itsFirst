import { Injectable } from '@angular/core';

import { Main } from './main';
import { PAGES } from './mock-routing-page';
//должен принимать и отавать список страниц роутинга
let storage = [];
@Injectable()
export class RoutingService {
    getP():Main[]{
        return PAGES
    };
    getStorage():[]{
        //console.log("RoutingService.get",storage)
        return storage
    };
    setStorage(a):[]{
        storage = a;
        //console.log("RoutingService.set",storage)
    };

}