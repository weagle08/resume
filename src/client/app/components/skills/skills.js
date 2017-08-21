/**
 * Created by ben on 11/5/16.
 */
import {inject} from 'aurelia-framework';
import {ResumeService} from 'app/services/resumeService';
import {ImageService} from 'app/services/imageService';

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

        for(let p of this.resume.projects) {
            this.languages = this.languages.concat(p.skills.languages.filter((v) => this.languages.indexOf(v) == -1));
            this.technologies = this.technologies.concat(p.skills.technologies.filter((v) => this.technologies.indexOf(v) == -1));
            this.tools = this.tools.concat(p.skills.tools.filter((v) => this.tools.indexOf(v) == -1));
            this.data = this.data.concat(p.skills.data.filter((v) => this.data.indexOf(v) == -1));
            this.processes = this.processes.concat(p.skills.processes.filter((v) => this.processes.indexOf(v) == -1));
        }
    }

    _getColor(index) {
        let multer = parseInt(index / 4);
        index = index - (4 * multer);

        switch (index) {
            case 1:
                return 'loader-success';
            case 2:
                return 'loader-warn';
            case 3:
                return 'loader-danger';
            default:
                return 'loader';
        }
    }
}

export class SkillListValueConverter {
    toView(value) {
        let retVal = [];

        if(value != null) {
            for(let v of value) {
                retVal.push(ImageService.getSkillName(v));
            }
        }

        return retVal.join(', ');
    }
}