import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

export const routes: Routes = [
  {
    path: '',
    component: NewEmployeeComponent,
  },
  {
    path: ':id',
    component: EmployeeComponent
  }
];

export const routing = RouterModule.forChild(routes);
