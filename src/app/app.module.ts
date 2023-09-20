import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdministrationModule } from '@feature/administration/administration.module';
import { AuthenticationModule } from '@feature/authentication/authentication.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@layout/layout.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		HttpClientModule,
		RouterModule,
		AppRoutingModule,

		LayoutModule,

		AuthenticationModule,
		AdministrationModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
