/**
 * Created by ben on 11/5/16.
 */
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class ImageService {
    constructor(httpClient) {
        this.client = httpClient;
    }

    _downloadImageMap() {
        if(this.imageMap == null) {
            return this.client.fetch('imageMap.json').then((imageMap) => {
                this.imageMap = imageMap;
                return this.imageMap;
            });
        } else {
            return Promise.resolve(this.imageMap);
        }
    }

    getImage(key) {
        if(key != null) {
            return this._downloadImageMap().then((imageMap) => {
                let uri = imageMap[key];
                if(uri != null) {
                    return this.client.fetch(uri).then((response) => {
                        return response.body;
                    });
                } else {
                    throw new Error('image not found');
                }
            });
        } else {
            return Promise.reject(new Error('no key specified'));
        }
    }
}