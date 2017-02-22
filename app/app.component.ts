import { Component }     from '@angular/core';
//import { NavModule }     from './modules/navigation/nav.module';
@Component({
    selector: 'my-app',
    template: `<label>Test App</label>
    <my-navigator></my-navigator>

    <router-outlet></router-outlet>
                 `
})
export class AppComponent {
}