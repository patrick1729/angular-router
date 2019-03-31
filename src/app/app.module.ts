import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CrisisListComponent } from '../components/crisis-list/crisis-list.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { HeroesModule } from '../feature/heroes/heroes.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        CrisisListComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        HeroesModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
