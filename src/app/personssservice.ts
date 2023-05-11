import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Person } from './person';

constructor(private http: HttpClient) {}


@Injectable()
export class ProductService {
  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];


getPersons() {
  return this.http
    .get<any>('assets/person.json')
    .toPromise()
    .then((res) => <Product[]>res.data)
    .then((data) => {
      return data;
    });
}}