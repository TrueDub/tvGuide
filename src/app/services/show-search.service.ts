import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ShowSearchService {


  constructor(private http: HttpClient) {
  }

  public performShowSearch(title: string): Observable<any> {
    return this.http.get('http://api.tvmaze.com/search/shows?q=' + title);
  }
}

