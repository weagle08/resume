/**
 * Created by ben on 10/23/16.
 */
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class App {
    constructor(router) {
        this.router = router;

        this.router.configure((config) => {
            config.title = "Ben Johnson";

            config.mapUnknownRoutes('pages/app');
        });
    }
}