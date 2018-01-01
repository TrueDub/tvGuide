import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ShowService} from './services/show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private showSearchService: ShowService, private router: Router) {

  }

  performSearch(title: string) {
    this.showSearchService.performShowSearch(title);
    this.router.navigate(['showSearchResults']);
  }

}
