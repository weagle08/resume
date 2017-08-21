/**
 * Created by ben on 11/7/16.
 */
import {inject, bindable} from 'aurelia-framework';
import {ResumeService} from 'app/services/resumeService';

@inject(ResumeService)
export class Projects {
    constructor(resumeService) {
        this.resumeService = resumeService;
    }

    attached() {
        this.resume = this.resumeService.getResume();
    }
}