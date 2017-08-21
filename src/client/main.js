/**
 * Created by ben on 10/23/16.
 */
import 'aurelia-polyfills';
import 'whatwg-fetch';
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.warn);

export function configure(aurelia) {
    aurelia.use.standardConfiguration();//.developmentLogging();
    aurelia.start().then(a => a.setRoot('pages/app', document.body));
}