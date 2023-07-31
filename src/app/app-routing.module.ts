import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' }
  // {
  //   path: 'auth',
  //   component: PrimaryLayoutComponent,
  //   loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule)
  // },
  // {
  //   path: 'admin',
  //   component: MainLayoutComponent,
  //   loadChildren: () => import('./feature/admin/admin.module').then(m => m.AdminModule),
  //   canActivate: [AuthGuard],
  //   data: { breadcrumb: 'Admin' }
  // }
  // {path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
