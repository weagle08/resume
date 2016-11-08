/**
 * Created by ben on 11/7/16.
 */
import {inject, bindable} from 'aurelia-framework';
import {ResumeService} from 'services/resumeService';

@bindable('contact')
@inject(ResumeService)
export class Contact {
    constructor(resumeService) {
        this.resumeService = resumeService;
    }

    attached() {
        this.resume = this.resumeService.getResume();
    }
}