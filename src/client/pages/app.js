/**
 * Created by ben on 10/23/16.
 */
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {HttpClient} from 'aurelia-fetch-client';

@inject(Router, HttpClient)
export class App {
    constructor(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;

        this.router.configure((config) => {
            config.title = "Ben Johnson";

            config.mapUnknownRoutes('pages/app');
        });

        //configure the fetch client
        this.httpClient.configure((config) => {
            config.withInterceptor({
                response(response) {
                    return response.json().catch(() => response).then(r => response.ok ? r : Promise.reject(r));
                }
            });
        });
    }
}