import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trek } from './models/trek';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  private _url = "assets/data/trek-list.json";
  private _screen: string;

  constructor(private http: HttpClient) { }

  getTrekList(): Observable<Trek[]>{
  	return this.http.get<Trek[]>(this._url);
  }

  setCurrentScreen(screen){
  	this._screen = screen;
  }

  getCurrentScreen(){
  	return this._screen;
  }

}
