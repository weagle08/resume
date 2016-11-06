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
        this.imageData = '';
    }

    attached() {
        this.imageService.getSkillName(this.skill).then((name) => {
            this.skillName = name;
        });

        this.imageService.getSkillImage(this.skill).then((imageData) => {
            let reader = new FileReader();
            reader.onload = (event) => {
                let base64String = event.target.result;
                this.imageLoaded = true;
                this.imageData = base64String;
            };
            reader.readAsDataURL(imageData);
        });
    }
}