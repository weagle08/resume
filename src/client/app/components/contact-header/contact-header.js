/**
 * Created by ben on 11/14/16.
 */
import {inject} from 'aurelia-framework';
import {ResumeService} from 'app/services/resumeService';

@inject(ResumeService)
export class ContactHeader {
    constructor(resumeService) {
        this.resumeService = resumeService;
    }

    attached() {
        this.resume = this.resumeService.getResume();
    }
}