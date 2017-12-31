import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {

  showDetail;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.showDetail = this.route.snapshot.data['showDetail'];
  }

}
