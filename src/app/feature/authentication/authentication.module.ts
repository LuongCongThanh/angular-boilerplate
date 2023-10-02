import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from '@feature/authentication/login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [LoginComponent],
	imports: [CommonModule, RouterModule, AuthenticationRoutingModule],
})
export class AuthenticationModule {}
