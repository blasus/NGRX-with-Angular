import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee.component';
import { routing } from './employee.route';
import { NgModule } from '@angular/core';
import { EmployeeStoreModule } from 'src/store/Employee/employee-store.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EmployeeStoreModule,
    routing,
  ],
  declarations: [
    EmployeeComponent,
  ],
})

export class EmployeeModule { }
