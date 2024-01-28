import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EmployeeStoreModule } from 'src/store/Employee/employee-store.module';
import { AppState, selectRole } from 'src/store/root/root.reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterModule,
    EmployeeStoreModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  role$: Observable<string>;

  constructor(private store: Store<AppState>) {
    // extract the user role depending on the loaded environment.
    this.role$ = this.store.select(selectRole);
  }
}
