import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

import { Chord } from '../shared/models/chord.model';

@Injectable()
export class SongService {

  constructor(private http: HttpClient) { }

  public getJSON(path: string): Observable<Chord[]> {
    const $http = this.http.get<Chord[]>(path);

    return $http
      .pipe(
        map((res: any) => {
          if (!res) {
            return Observable.throw("Value expected!");
          }
          return res;
        }),
        catchError(err => {
          console.log("Caught mapping error and rethrowing", err);
          return throwError(err);
        }),
        catchError(err => {
          console.log("Caught rethrown error, providing fallback value");
          return of([]);
        }),
        retry(3) // Retry up to 3 times before failing
      );
  }
}
