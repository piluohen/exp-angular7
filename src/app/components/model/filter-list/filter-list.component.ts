import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterListComponent implements OnInit {
  constructor() {}

  @Input() filterList: any;

  ngOnInit() {}

  getList() {}
}
