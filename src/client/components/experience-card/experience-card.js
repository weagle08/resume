/**
 * Created by ben on 11/6/16.
 */
import {inject, bindable} from 'aurelia-framework';
import {ImageService} from 'services/imageService';

@bindable('experience')
@inject(ImageService)
export class ExperienceCard {
    constructor(imageService) {
        this.imageService = imageService;
        this.imageData = '';
    }

    attached() {
        this.imageService.getSkillImage(this.experience.icon).then((imageData) => {
            this.imageLoaded = true;
            this.imageData = imageData;
        });
    }
}