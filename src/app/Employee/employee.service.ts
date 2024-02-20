import { Injectable } from '@angular/core';
import { Observable, map, timer } from 'rxjs';
import { IEmployee } from 'src/store/Employee/Models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  public getEmployees(): Observable<IEmployee[]> {
    return timer(500)
      .pipe(map(() => EMPLOYEE_INFO))
  }
}

const EMPLOYEE_INFO: IEmployee[] = [
  {
    department: 'HealthCare',
    id: '001',
    role: 'Health care specialist',
    name: 'Mike Stephen',
    salary: '480000',
  },
  {
    department: 'Finance',
    id: '002',
    role: 'Accounts Assistant',
    name: 'Mike Jhon',
    salary: '480000',
  },
  {
    department: 'Development',
    id: '003',
    role: 'Backend Developer',
    name: 'Bless Stephen',
    salary: '480000',
  }
];
