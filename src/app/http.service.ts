import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  ApiUrl: string = 'http://jsonplaceholder.typicode.com/albums'

  constructor(public http: HttpClient) { }
  dataDetails() {
    return this.http.get(this.ApiUrl)
  }
}
