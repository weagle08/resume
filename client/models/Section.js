/**
 * Created by weagl on 12/18/2015.
 */
import {Article} from 'models/Article';
import {IconArticle} from 'models/IconArticle';
import {ProjectArticle} from 'models/ProjectArticle';
import {ExperienceArticle} from 'models/ExperienceArticle';

export class Section {
    constructor(section) {
        this.articles = [];

        this.name = section.name;
        this.order = section.order === undefined ? 9999 : section.order;
        this.icon = section.icon;
        this.color = section.color;

        for(let a of section.items) {
            let article = null;
            switch (a.type) {
                case 'icon':
                    article = new IconArticle(a);
                    break;
                case 'project':
                    article = new ProjectArticle(a);
                    break;
                case 'experience':
                    article = new ExperienceArticle(a);
                    break;
                default:
                    console.log('error processing section item in ' + this.name);
            }

            if(article != null) {
                this.articles.push(article);
            }
        }
    }
}