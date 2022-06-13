import { ComponentsModule } from './components/components.module';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutModule, ComponentsModule],
  exports: [LayoutModule],
})
export class AdminModule {}
