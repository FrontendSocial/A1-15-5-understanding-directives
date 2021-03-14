import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ec-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss']
})
export class SearchFiltersComponent implements OnInit {
  searchText = '';

  constructor() { }

  ngOnInit(): void {
  }

}
