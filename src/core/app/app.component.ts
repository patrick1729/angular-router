import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 11;

    @ViewChild(RouterOutlet, {static: true}) outlet: RouterOutlet;

    constructor(
        private router: Router
    ) {
    }

    navigateToHeroes() {
        this.router.navigate(['/heroes'], {queryParams: {
            tyuiop: 67,
        }});
    }

    ngOnInit() {
        if (this.outlet) {
            setTimeout(() => {
                console.log(this.outlet);
            });
        }
    }
}
