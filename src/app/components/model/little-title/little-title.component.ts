import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-little-title',
  templateUrl: './little-title.component.html',
  styleUrls: ['./little-title.component.scss']
})
export class LittleTitleComponent implements OnInit {
  constructor() {}
  @Input() title: string;
  @Input() type = 'vertical'; // horizontal
  ngOnInit() {}
}
