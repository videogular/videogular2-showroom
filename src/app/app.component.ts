import { Component, HostBinding, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy {
    @HostBinding('class')
    isStandalone = '';

    subscriptions: Subscription[] = [];

    constructor(private route: ActivatedRoute, public angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {

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
