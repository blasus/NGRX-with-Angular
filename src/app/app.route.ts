import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', loadChildren: './Home/home.module#HomeModule' },
  { path: 'employee', loadChildren: './Employee/employee.module#EmployeeModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
