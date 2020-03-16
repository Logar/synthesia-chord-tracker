import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Song } from '../shared/models/song.model';

@Injectable()
export class SongService {

  constructor(private http: HttpClient) { }
  
  public getJSON(path: string): Observable<Song[]> {
    return this.http.get<Song[]>(path)
                    .map((res:any) => res)
                    .catch((error:any) => Observable.throw(error))
  }
}
