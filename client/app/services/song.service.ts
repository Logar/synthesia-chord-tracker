import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SongService {

  constructor(private http: HttpClient) { }

  public getJSON(): Observable<any> {
    return this.http.get('../../assets/json/songs/song1.json')
                    .map((res:any) => res)
                    .catch((error:any) => Observable.throw(error))
  }
}
