import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonService {
    constructor(private http: Http){
        console.log('--- JsonService Initialized ---');
    }

    getJson(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json())
    }
}
