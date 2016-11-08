/**
 * Created by ben on 11/5/16.
 */
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {default as ImageMap} from 'imageMap.json!text';

@inject(HttpClient, ImageMap)
export class ImageService {
    constructor(httpClient, imageMap) {
        this.client = httpClient;
        this.imageMap = JSON.parse(imageMap);
    }

    getSkillImage(key) {
        if(key != null) {
            let uri = this.imageMap[key].path;
            if(uri != null) {
                return this.client.fetch(uri).then((response) => response.blob()).then((imageData) => {
                    return URL.createObjectURL(imageData);
                });
            } else {
                return Promise.reject(new Error('image not found'));
            }
        } else {
            return Promise.reject(new Error('no key specified'));
        }
    }

    getSkillName(key) {
        if(key != null) {
            return Promise.resolve(this.imageMap[key].name);
        } else {
            return Promise.reject(new Error('no key specified'));
        }
    }
}