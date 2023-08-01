import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenRoutingModule } from './authen-routing.module';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule, AuthenRoutingModule]
})
export class AuthenModule {}
