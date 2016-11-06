/**
 * Created by ben on 11/5/16.
 */
import {inject, bindable} from 'aurelia-framework';
import {ImageService} from 'services/imageService';

@bindable('skill')
@inject(ImageService)
export class SkillCard {
    constructor(imageService) {
        this.imageService = imageService;
    }

    attached() {
        this.imageService.getImage(this.skill).then((imageData) => {
            this.imageLoaded = true;
            $('#theImage').attr('src', imageData);
        });
    }
}

export class SkillNameValueConverter {
    toView(value) {
        if(value != null) {
            return value.toString().replace('-', ' ');
        }

        return value;
    }
}