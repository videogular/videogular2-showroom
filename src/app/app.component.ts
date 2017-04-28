import { Component, HostBinding, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy {
    @HostBinding('class')
    isStandalone = '';

    subscriptions: Subscription[] = [];

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.subscriptions.push(
            this.route.queryParams
                .subscribe((params: any) => {
                    if (params.standalone === 'true') {
                        this.isStandalone = 'is-standalone';
                    }
                })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}
