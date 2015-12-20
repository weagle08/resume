/**
 * Created by weagl on 12/18/2015.
 */
export class Article {
    constructor(article) {
        if(this.constructor == Article) {
            throw new TypeError('cannot construct Article instances directly');
        }

        this.name = article.name;
        this.role = article.role;
        this.dates = article.dates;
        this.link = article.link;
    }
}