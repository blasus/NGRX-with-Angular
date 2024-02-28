import { Injectable } from '@angular/core';
import { Observable, map, tap, timer } from 'rxjs';
import { IEmployee } from 'src/store/Employee/Models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  /**
   * Fetches the available employees for this user
   * @returns the employees
   */
  public getEmployees(): Observable<IEmployee[]> {
    return timer(500)
      .pipe(map(() => EMPLOYEE_INFO))
  }

  /**
   * Adds a new employee to the list of employees
   * @param employee 
   * @returns the added employee
   */
  public addEmployee(employee: IEmployee): Observable<IEmployee> {
    return timer(500)
      .pipe(
        tap(() => console.log('Added employee:', employee)),
        map(() => ({
          ...employee,
          // unique id
          id: uniqueId()
        })),
        tap(employee => EMPLOYEE_INFO.push(employee)),
        map((employee) => employee)
      );
  }
}

const uniqueId = () => Math.random().toString(16).slice(2);

const EMPLOYEE_INFO: IEmployee[] = [
  {
    department: 'HealthCare',
    id: uniqueId(),
    role: 'Health care specialist',
    name: 'Mike Stephen',
    email: 'mstephen@employee.com',
    salary: 480000,
  },
  {
    department: 'Finance',
    id: uniqueId(),
    role: 'Accounts Assistant',
    name: 'Mike Jhon',
    email: 'mjhon@employee.com',
    salary: 480000,
  },
  {
    department: 'Development',
    id: uniqueId(),
    role: 'Backend Developer',
    name: 'Bless Stephen',
    email: 'bstephen@employee.com',
    salary: 480000,
  }
];
