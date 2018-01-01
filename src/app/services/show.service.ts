import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ShowService {

  private searchDataSource = new BehaviorSubject<any>('{}');
  searchData = this.searchDataSource.asObservable();

  constructor(private http: HttpClient) {
  }

  public performShowSearch(title: string) {
    this.http.get('https://api.tvmaze.com/search/shows?q=' + title).subscribe(data => {
      this.searchDataSource.next(data);
    });
  }

  public performShowLookup(id: string): Observable<any> {
    return this.http.get('https://api.tvmaze.com/shows/' + id);
  }
}

