import { Injectable } from "@angular/core";
import { Observable } from "rxjs"; // per Observable
import { HttpClient } from "@angular/common/http"; // per HttpClient
import { aPost } from "./app.component";

@Injectable()
export class KvaasService {
  URL: string = "https://api.keyvalue.xyz/88046adf/prova";

  constructor(private http: HttpClient) {}

  public getvalue(): Observable<aPost[]> {
    return this.http.get<aPost[]>(this.URL);
  }

  public postvalue(data: aPost[]): Observable<Object> {
    return this.http.post(this.URL, JSON.stringify(data));
  }
}
