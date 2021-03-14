import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ec-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor() { }

  ngAfterViewInit() {
    console.log("After View Init Fired");
  }
  ngDoCheck() {
    console.log("Do check Fired");
  }
  ngAfterContentInit() {
    console.log("Content Init Fired");
  }
  ngAfterContentChecked() {
    console.log("Content Checked Fired");
  }
  ngAfterViewChecked() {
    console.log("After View CHecked Fired");
  }
  ngOnChanges() {
    console.log("On Changes Fired");
  }
  ngDestory() { console.log("On Destroy Fired"); }
  ngOnInit() { console.log("On Init Fired"); }
}
