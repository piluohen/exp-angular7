import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.scss']
})
export class FileDownloadComponent implements OnInit, OnChanges {
  @Input() list: any[] = [];

  rootPath = environment.baseUrl;

  downloadImg: any = this.rootPath + 'assets/img/park-service/files.png';

  fileList: any[] = [];

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: any) {
    if (changes.list) {
      const { currentValue, firstChange } = changes.list;
      this.fileList = currentValue;
    }
  }
}
