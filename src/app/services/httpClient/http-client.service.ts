import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private http: HttpClient
  ) { }

  public getData(url: string): Observable<any> {
    return this.http.get(url);
  }

  public postData(url: string, body): Observable<any> {
    return this.http.post(url, body);
  }

  public putDate(url: string, body): Observable<any> {
    return this.http.put(url, body);
  }

  public deleteData(url: string): Observable<any> {
    return this.http.delete(url);
  }
}
