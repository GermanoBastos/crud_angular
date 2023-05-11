import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Pessoa } from './person';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}
  getPersons() {
    return this.http
      .get<any>('assets/person.json')
      .toPromise()
      .then((res) => <Pessoa[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
