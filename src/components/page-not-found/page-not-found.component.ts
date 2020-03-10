import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-page-not-found",
    templateUrl: "./page-not-found.component.html",
    styleUrls: ["./page-not-found.component.scss"]
})
export class PageNotFoundComponent implements OnInit {
    title: any;
    constructor(private router: ActivatedRoute, private route: Router) {
        this.title = this.router.snapshot.paramMap.get('u_id') || 'Page not found';
    }

    ngOnInit() {
        console.log(this.route.routerState);
        console.log(this.router.snapshot.paramMap);
        console.log(this.router.snapshot.queryParams);
        console.log(this.router.snapshot.queryParamMap);
    }
}
