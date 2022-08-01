import { DialogModule } from './../../../dialogs/dialog.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { NgxFileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [FileUploadComponent],
  imports: [CommonModule, NgxFileDropModule, DialogModule],
  exports: [FileUploadComponent],
})
export class FileUploadModule {}
