import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../constants/hero';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

    hero: Hero;

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        console.log('Route: ', this.route);
        this.route.queryParams.subscribe((hero: Hero) => { this.hero = hero; console.log('Hero: ', hero);});
    }

}
