import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { NavComponent }   from './nav.component';

//DESCR: переключает страницы, меняет стейт пунктов меню, меняет стейт отображения меню при необходимости(меню главной/меню остальное, меню развернуто/меню скрыто)


/*const appRoutes: Routes = [
    { path: 'crisis-center', component: CrisisListComponent },
    { path: 'hero/:id',      component: HeroDetailComponent },
    {
        path: 'heroes',
        component: HeroListComponent,
        data: { title: 'Heroes List' }
    },
    { path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
]*/
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ NavComponent ],
    bootstrap:    [ NavComponent ],
    exports:[NavComponent]
})
export class NavModule {
    public test
   constructor(test:string){
        console.log(test)
    } /**/
}