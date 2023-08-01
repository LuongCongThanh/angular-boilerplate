import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MainLayoutComponent } from '@layout/main-layout/main-layout.component';
import { PrimaryLayoutComponent } from './primary-layout/primary-layout.component';

@NgModule({
  declarations: [MainLayoutComponent, PrimaryLayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [],
  providers: []
})
export class LayoutModule {}
