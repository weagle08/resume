/**
 * Created by weagl on 12/18/2015.
 */
import {Article} from 'models/Article';

export class ProjectArticle extends Article {
    constructor(article) {
        super(article);

        this.notes = article.notes;
    }
}