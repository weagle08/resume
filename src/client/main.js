/**
 * Created by ben on 10/23/16.
 */
import 'aurelia-polyfills';

export function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging();
    aurelia.start().then(a => a.setRoot('pages/app', document.body));
}