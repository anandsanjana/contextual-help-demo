import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelpContent } from './../models/help-content';
import { Observable } from 'rxjs';

@Injectable()
export class HelpDataService {

  private _url = "assets/data/help-content.json";

  constructor(private _http: HttpClient) { }

  getHelpContent(): Observable<HelpContent[]>{
  	return this._http.get<HelpContent[]>(this._url);
  }

}
