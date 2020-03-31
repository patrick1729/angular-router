import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../constants/hero';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
    selectedHero: Hero;

    heroes: Hero[];

    constructor(
        private heroService: HeroService,
        private router: Router
    ) { }

    ngOnInit() {
        this.getHeroes();
    }

    // async onSelect(hero: Hero): Promise<any> {
    //     this.selectedHero = hero;
    //     const result = await this.router.navigate(['hero-detail'], {
    //         queryParams: {
    //             id: hero.id,
    //             name: hero.name
    //         }
    //     });
    //     console.log(result);
    // }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

}
