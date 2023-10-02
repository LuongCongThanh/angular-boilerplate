import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimaryLayoutComponent } from '@layout/primary-layout/primary-layout.component';

const routes: Routes = [
	{ path: '', redirectTo: 'auth', pathMatch: 'full' },
	{
		path: 'auth',
		component: PrimaryLayoutComponent,
		loadChildren: () => import('@feature/authentication/authentication.module').then(m => m.AuthenModule),
	},
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
	exports: [RouterModule],
})
export class AppRoutingModule {}
