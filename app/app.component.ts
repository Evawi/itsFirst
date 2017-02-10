import { Component } from '@angular/core';
import { NavModule }     from './modules/navigation/nav.module';
@Component({
    selector: 'my-app',
    template: `<label>Введите имя:</label>

                 <input [(ngModel)]="name" placeholder="name">
                 <h1>Добро пожаловать {{name}}!</h1>
                 <my-navigator>Загрузка...</my-navigator>
                 `
})
export class AppComponent {
    name= '';
}