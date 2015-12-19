/**
 * Created by weagl on 12/18/2015.
 */
import {IconArticle} from 'models/IconArticle';
import {ProjectArticle} from 'models/ProjectArticle';
import {ExperienceArticle} from 'models/ExperienceArticle';

export class IsTypeValueConverter {
    toView(value, expected) {
        switch (expected) {
            case 'icon':
                return value instanceof IconArticle;
            case 'project':
                return value instanceof ProjectArticle;
            case 'experience':
                return value instanceof ExperienceArticle;
            default:
                return false;
        }
    }
}