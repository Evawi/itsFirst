import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NavComponent }   from './nav.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ NavComponent ],
    bootstrap:    [ NavComponent ],
    exports:[NavComponent]
})
export class NavModule { }