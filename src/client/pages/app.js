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

            config.map([
                {route: ['', 'info'], name: 'info', moduleId: 'pages/info/info', nav: true},
                {route: ['experience'], name: 'experience', moduleId: 'pages/experience/experience', nav: true},
                {route: ['contact'], name: 'contact', moduleId: 'pages/contact/contact', nav: true}
            ]);

            config.mapUnknownRoutes('pages/info/info');
        });
    }

    _onNavClick(event) {
        for(let e of event.path) {
            if(e.localName === 'li') {
                currentActive = e;
                e.className = 'active';
            }

            if(e.localName === 'ul') {

            }
        }
    }
}