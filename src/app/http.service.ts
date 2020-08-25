import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }
    get(endpoint) {
        const  baseUrl = 'https://reqres.in/api/'
    const url = `${baseUrl}${endpoint}`;
    return this.http.get(url);
  }
}
