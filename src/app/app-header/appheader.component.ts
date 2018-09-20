import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})

export class AppHeaderComponent implements OnInit {
  title = 'AngularProject1';
  constructor() { }

  ngOnInit() {
  }

}