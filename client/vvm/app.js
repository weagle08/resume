/**
 * Created by weagl on 11/19/2015.
 */
import {inject} from 'aurelia-dependency-injection';
import {Router} from 'aurelia-router';

@inject(Router)
export class App {
    constructor(router) {
        this.router = router;
        
        this.router.configure(config => {
            config.title = 'aurelia-start';
            config.map([
                {route: ['', 'home'], moduleId: 'vvm/dashboard/dashboard', nav: false}
            ]);
        });
    }
}