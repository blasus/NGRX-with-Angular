import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./Home/home.module').then(m => m.HomeModule)
  },
  { 
    path: 'employee',
    loadChildren: () => import('./Employee/employee.module').then(m => m.EmployeeModule)
  },
];