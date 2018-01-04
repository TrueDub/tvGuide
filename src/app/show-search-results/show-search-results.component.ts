import {Component, OnInit} from '@angular/core';
import {ShowService} from '../services/show.service';

@Component({
  selector: 'app-show-search-results',
  templateUrl: './show-search-results.component.html',
  styleUrls: ['./show-search-results.component.css']
})
export class ShowSearchResultsComponent implements OnInit {

  public showList;

  constructor(private showSearchService: ShowService) {
  }

  ngOnInit() {
    this.showSearchService.searchData.subscribe(data => {
      this.showList = data;
    });
  }

}
