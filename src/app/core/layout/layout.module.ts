import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MainLayoutComponent } from '@layout/main-layout/main-layout.component';
import { PrimaryLayoutComponent } from './primary-layout/primary-layout.component';
import { LayoutService } from '@core/service/layout/layout.service';

@NgModule({
	declarations: [MainLayoutComponent, PrimaryLayoutComponent],
	imports: [CommonModule, RouterModule],
	exports: [],
	providers: [LayoutService],
})
export class LayoutModule {}
