/**
 * Created by ben on 10/23/16.
 */
import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';

@inject(Router)
export class PageMenu {
    constructor(router){
        this.router = router;
    }

    _navigateToRoute(name) {
        this.router.navigateToRoute(name);
    }

    _onNavClick(event) {
        let clicked = null;
        for(let e of event.path) {
            if(e.localName === 'li') {
                clicked = e;
                e.className = 'active';
            }

            if(e.localName === 'ul') {
                for(let c of e.children) {
                    if(c != clicked) {
                        c.className = '';
                    }
                }
            }
        }
    }
}