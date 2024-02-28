import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-new-employee',
  standalone: true,
  imports: [
    CommonModule,
    EmployeeFormComponent
  ],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent {



}
