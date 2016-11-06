/**
 * Created by ben on 11/5/16.
 */
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {default as Resume} from 'resume.json!text';

@inject(HttpClient, Resume)
export class ResumeService {
    constructor(httpClient, resume) {
        this.client = httpClient;
        this.resume = JSON.parse(resume);
    }

    getResume() {
        return this.resume;
    }
}