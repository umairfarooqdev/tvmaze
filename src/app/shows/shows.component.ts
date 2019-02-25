import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {

  shows$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.shows$ = data
    )
  }

}
