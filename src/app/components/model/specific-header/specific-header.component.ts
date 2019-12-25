import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-specific-header',
  templateUrl: './specific-header.component.html',
  styleUrls: ['./specific-header.component.scss']
})
export class SpecificHeaderComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  // 图片路径
  rootPath = environment.baseUrl;

  ngOnInit() {}
}
