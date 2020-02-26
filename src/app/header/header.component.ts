import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  urlGitHub = 'https://github.com/schullq/equation-breaker';

  constructor() { }

  ngOnInit() {
  }

}
