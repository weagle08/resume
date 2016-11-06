/**
 * Created by ben on 11/5/16.
 */
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class ResumeService {
    constructor(httpClient) {
        this.client = httpClient;
    }

    _downloadResume() {
        if(this.resume == null) {
            return this.client.fetch('/resume.json').then((response) => response.json()).then((resume) => {
                this.resume = resume;
                return this.resume;
            });
        } else {
            return Promise.resolve(this.resume);
        }
    }

    getResume() {
        return this._downloadResume();
    }
}