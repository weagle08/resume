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
        this.imageId = '#' + Math.floor((Math.random() * 1000) + 1);
    }

    attached() {
        this.imageService.getImage(this.skill).then((imageData) => {
            this.imageLoaded = true;
            let reader = new FileReader();
            reader.onload = (event) => {
                let base64String = event.target.result;
                $('#' + this.skill + '> img').attr('src', base64String);
            };
            reader.readAsDataURL(imageData);
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