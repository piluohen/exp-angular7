import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UploadFile } from 'ng-zorro-antd/upload';
import { HttpService } from 'src/app/service/http/http.service';
import { uploadUrl } from 'src/app/service/url/common';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };

  fileList: any[] = [];

  limitSize: 2;

  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private message: NzMessageService, private http: HttpService) {
    this.initForm();
  }

  ngOnInit() {}

  /**
   * 初始化表单
   */
  initForm() {
    this.validateForm = this.fb.group({
      note: [null]
    });
  }

  /**
   * 预览图片
   */
  handlePreview = (file: UploadFile) => {
    this.fileList.forEach((item, index) => {
      if (item.url === file.url) {
      }
    });
  };

  /**
   * 上传操作
   */
  beforeUpload = (file: UploadFile): boolean => {
    const fileList = this.fileList.concat(file);
    const isLimitSize = file.size / 1024 / 1024 < this.limitSize;
    if (!isLimitSize) {
      this.message.create('error', `图片大小不能超过${this.limitSize}MB`);
    }

    const limitType = 'image/jpeg';
    const fileTypeArr = limitType.split(',') || [];
    const fileType = file.type || '';
    const canUpload = fileTypeArr.includes(fileType);
    if (!canUpload) {
      this.message.create('error', '图片格式错误');
    }
    if (isLimitSize && canUpload) {
      const formData = new FormData();
      formData.append('teamId', 'ipark-service-center');
      fileList.forEach((file: any) => {
        formData.append('files', file);
      });
      this.http.postFile(uploadUrl, formData).subscribe(res => {
        const data = res['data'];
        if (data && data.urlList && data.urlList.length > 0) {
          const list = data.urlList.map(item => {
            return { url: item };
          });
          this.fileList = [...this.fileList, ...list];
          this.message.create('success', '上传成功');
        } else {
          this.message.create('error', '上传失败');
        }
      });
    }
    return false;
  };

  /**
   * 删除操作
   */
  handleDelete = (file: UploadFile) => {
    this.fileList = this.fileList.filter(item => {
      return item.url !== file.url;
    });
  };

  handleCancel(): void {
    this.cancel.emit();
  }

  handleConfirm(): void {
    this.handleCancel();
  }
}
