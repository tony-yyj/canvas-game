import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";

const router: Routes = [
    {
        path: 'trigonometry',
        loadChildren: './trigonometry/trigonometry.module#TrigonometryModule',
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(router),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
