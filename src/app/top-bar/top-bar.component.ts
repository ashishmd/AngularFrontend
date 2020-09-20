import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  activeTab;
  tabList;
  constructor() { }

  ngOnInit() {
    this.activeTab = null;
    this.tabList = [
      {name: 'GetSQL', link: '', noHighlight: true},
      {name: 'Docs', link: 'productlist'},
      {name: 'Get Started', link: ''},
      {name: 'Make Queries', link: ''},
    ];
  }

  onSelect(tab) {
    this.activeTab = tab;
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/