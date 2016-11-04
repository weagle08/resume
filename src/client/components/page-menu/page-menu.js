/**
 * Created by ben on 10/23/16.
 */
import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';

@inject(Router)
export class PageMenu {
    constructor(router){
        this.router = router;
        this.showMenu = true;

        this.navClass = 'nav';
    }

    _onToggleMenuClick() {
        if(this.navClass == 'nav') {
            this.navClass += ' expand';
        } else {
            this.navClass = 'nav';
        }
    }
}