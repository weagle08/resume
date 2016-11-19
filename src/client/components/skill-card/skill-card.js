/**
 * Created by ben on 11/5/16.
 */
import {inject, bindable} from 'aurelia-framework';
import {ImageService} from 'services/imageService';

@bindable('skill')
@bindable('loaderStyle')
@inject(ImageService)
export class SkillCard {
    constructor(imageService) {
        this.imageService = imageService;
        this.imageData = '';

        this.loaderStyle = 'loader';
    }

    attached() {
        this.imageService.getSkillName(this.skill).then((name) => {
            this.skillName = name;
        });

        this.imageService.getSkillImage(this.skill).then((imageData) => {
            this.imageLoaded = true;
            this.imageData = imageData;
        });
    }
}