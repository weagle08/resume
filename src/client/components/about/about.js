/**
 * Created by ben on 11/5/16.
 */
import {inject} from 'aurelia-framework';
import {ResumeService} from 'services/resumeService';

@inject(ResumeService)
export class About {
    constructor(resumeService) {
        this.resumeService = resumeService;
    }

    attached() {
        this.resumeService.getResume().then((resume) => {
            this.resume = resume;
        }, (error) => {
            console.log(error);
        }).catch(ex => console.log(ex));
    }
}