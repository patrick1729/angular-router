import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from 'src/components/crisis-list/crisis-list.component';
import { PageNotFoundComponent } from 'src/components/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'crisis-center', component: CrisisListComponent },
    { path: '', redirectTo: 'heroes', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
