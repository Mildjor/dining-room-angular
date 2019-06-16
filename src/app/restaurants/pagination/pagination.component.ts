import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dr-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
	@Input() count: number;
	@Output() pageChanged = new EventEmitter();
	activePage: number;
	pageCount: number;
	array;

  constructor() { }

  ngOnChanges() {
  	this.activePage = 1;
  	this.pageCount = Math.ceil(this.count / 12);
  	this.array = new Array(this.pageCount);
  }

  changePage(newPage) {
  	this.activePage = newPage;
  	this.pageChanged.emit(this.activePage);
  }

}
