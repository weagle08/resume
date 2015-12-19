/**
 * Created by weagl on 12/18/2015.
 */
import {Article} from 'models/Article';

export class IconArticle extends Article {
    constructor(article) {
        super(article);

        this.items = article.items;
    }
}