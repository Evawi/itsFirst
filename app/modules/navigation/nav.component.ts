import { Component } from '@angular/core';

@Component({
    selector: 'my-navigator',
    template: `<label>NAV:</label>
                 <input [(ngModel)]="name" placeholder="name">
                 <h1>Добро пожаловать {{name}}!</h1>`
})
export class NavComponent {
    name= '';
}