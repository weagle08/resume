/**
 * Created by weagl on 12/18/2015.
 */
import {Article} from 'models/Article';
import {ProjectArticle} from 'models/ProjectArticle';

export class ExperienceArticle extends Article {
    constructor(article) {
        super(article);

        this.projects = [];

        for(let p of article.projects){
            this.projects.push(new ProjectArticle(p));
        }
    }
}