/**
 * Created by weagl on 11/19/2015.
 */
import * as resume from 'resume.json!';
import {Section} from 'models/Section.js'

export class App {
    constructor() {
        this._loadResume().then(function(result){
            this.sections = result.sections;
        }.bind(this));
    }

    attached(){

    }

    /**
     * parses the resume parts asynchronously
     * @private
     */
    _loadResume(){
        return new Promise(function(resolve, reject){
            let sections = [];
            for(let s of resume.sections) {
                let section = new Section(s);
                sections.push(section);
            }

            resolve({sections: sections});
        });
    }
}