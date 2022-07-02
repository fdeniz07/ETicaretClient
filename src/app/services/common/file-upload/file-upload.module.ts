import { FileUploadComponent } from './file-upload.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFileDropModule } from 'ngx-file-drop';



@NgModule({
  declarations: [FileUploadComponent],
  imports: [
    CommonModule,
    NgxFileDropModule
  ]
})
export class FileUploadModule { }
