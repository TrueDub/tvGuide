import {Component, OnInit} from '@angular/core';
import {ShowSearchService} from '../services/show-search.service';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {

  public showList;

  constructor(private showSearchService: ShowSearchService) {
  }

  ngOnInit() {

  }

  performSearch(title: string) {
    console.log('searching for ' + title);
    this.showSearchService.performShowSearch(title).subscribe(data => {
      this.showList = data;
    });
  }

}
