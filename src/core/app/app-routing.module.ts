import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from 'src/components/crisis-list/crisis-list.component';
import { PageNotFoundComponent } from 'src/components/page-not-found/page-not-found.component';
import { HeroListComponent } from 'src/feature/heroes/components/hero-list/hero-list.component';
import { HeroDetailComponent } from 'src/feature/heroes/components/hero-detail/hero-detail.component';

const routes: Routes = [
    { path: 'crisis-center', component: CrisisListComponent },
    { path: 'heroes', component: HeroListComponent },
    { path: 'hero-detail', component: HeroDetailComponent },
    { path: 'hero-detail', component: HeroDetailComponent },
    { path: '', redirectTo: 'heroes', pathMatch: 'full'},
    { path: 'team/:id/user/:u_id', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true,
        anchorScrolling: 'enabled',
        // onSameUrlNavigation: 'reload',
        // scrollPositionRestoration: 'enabled',
        // enableTracing: true,
        // relativeLinkResolution: 'corrected',
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
