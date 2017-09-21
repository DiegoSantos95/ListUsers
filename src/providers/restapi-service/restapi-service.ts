import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestapiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestapiServiceProvider {
  data: any;

  constructor(public http: Http) {
    console.log('Hello RestapiServiceProvider Provider');
  }

  load(page) {

    return this.http.get(`https://reqres.in/api/users?page=${page}`)
        .map(res => res.json())

  }
}
