/**
 * Created by ben on 11/5/16.
 */
import {inject} from 'aurelia-framework';
import {ResumeService} from 'services/resumeService';

@inject(ResumeService)
export class Skills {
    constructor(resumeService) {
        this.resumeService = resumeService;
    }

    attached() {
        this.resume = this.resumeService.getResume();
        this.languages = [];
        this.technologies = [];
        this.tools = [];
        this.data = [];
        this.processes = [];

        for(let e of this.resume.experience) {
            for(let p of e.projects) {
                this.languages = this.languages.concat(p.skills.languages.filter((v) => this.languages.indexOf(v) == -1));
                this.technologies = this.technologies.concat(p.skills.technologies.filter((v) => this.technologies.indexOf(v) == -1));
                this.tools = this.tools.concat(p.skills.tools.filter((v) => this.tools.indexOf(v) == -1));
                this.data = this.data.concat(p.skills.data.filter((v) => this.data.indexOf(v) == -1));
                this.processes = this.processes.concat(p.skills.processes.filter((v) => this.processes.indexOf(v) == -1));
            }
        }
    }
}

function dedupeArray(){

}