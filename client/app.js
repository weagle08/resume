/**
 * Created by weagl on 11/19/2015.
 */
import * as resume from '/resume.json!';

export class App {
    constructor() {

    }

    attached(){
        this.skills = resume.skills;
    }
}