import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import * as fromScoreBoard from '../../feature/heroes/components/hero-list/hero.reducer';

import { CrisisListComponent } from '../../components/crisis-list/crisis-list.component';
import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';
import { HeroesModule } from '../../feature/heroes/heroes.module';
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
        AppRoutingModule,
        StoreModule.forRoot({game: fromScoreBoard.reducer})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
