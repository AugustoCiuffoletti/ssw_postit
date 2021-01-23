import { Injectable } from '@angular/core';
import { Observable } from "rxjs";                  // per Observable
import { HttpClient } from "@angular/common/http";  // per HttpClient

@Injectable()
export class KvaasService {
  URL: string = 'https://api.keyvalue.xyz/88046adf/prova'
  constructor(private http: HttpClient) { }

  public getvalue(): Observable<String> {
    return this.http.get<String>(this.URL);
  };
};