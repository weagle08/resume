/**
 * Created by weagl on 11/21/2015.
 */
export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();
    
    aurelia.start().then(a => a.setRoot());
}