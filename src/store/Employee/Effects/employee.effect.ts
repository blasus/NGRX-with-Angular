import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { filter, switchMap } from 'rxjs/operators';

import { getEmployeeLoaded } from '../Reducer/employee.reducer';
import { of } from '../../../../node_modules/rxjs/internal/observable/of';
import { IEmployee } from '../Models/employee.model';
import { InformationFetchSucceeded } from '../Actions/employee.action';

@Injectable()
export class EmployeeAPIEffects {

  constructor(
    private store: Store<IEmployee>,
  ) { }

  @Effect() loadEmployeeEffect$ = combineLatest(
    this.store.pipe(select(getEmployeeLoaded)),
  ).pipe(
    filter(([loaded]) => !loaded),
    switchMap(() => {
      return of(new InformationFetchSucceeded(EMPLOYEE_INFO));
    }),
  );


}

const EMPLOYEE_INFO: IEmployee[] = [{
  department: 'HelathCare',
  id: '001',
  isMarried: true,
  name: 'Mike Stephen',
  salary: '480000',
},
{
  department: 'HelathCare',
  id: '002',
  isMarried: true,
  name: 'Mike Jhon',
  salary: '480000',
},
{
  department: 'HelathCare',
  id: '003',
  isMarried: true,
  name: 'Bless Stephen',
  salary: '480000',
}
]
