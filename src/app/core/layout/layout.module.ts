import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutService } from '@core/service/layout.service';

import { MainLayoutComponent } from '@layout/main-layout/main-layout.component';
import { PrimaryLayoutComponent } from './primary-layout/primary-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
	imports: [CommonModule, RouterModule],
	exports: [],
	providers: [LayoutService],
	declarations: [MainLayoutComponent, PrimaryLayoutComponent, HeaderComponent, FooterComponent],
})
export class LayoutModule {}
