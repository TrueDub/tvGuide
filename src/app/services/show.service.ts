import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ShowService {


  constructor(private http: HttpClient) {
  }

  public performShowSearch(title: string): Observable<any> {
    return this.http.get('https://api.tvmaze.com/search/shows?q=' + title);
  }

  public performShowLookup(id: string): Observable<any> {
    return this.http.get('https://api.tvmaze.com/shows/' + id);
  }
}

