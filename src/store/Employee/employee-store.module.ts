import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { employeeFeatureKey, employeeReducer } from './Reducer/employee.reducer';
import * as employeeEffects from './Effects/employee.effect';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(employeeFeatureKey, employeeReducer),
    EffectsModule.forFeature(employeeEffects),
  ],
})

export class EmployeeStoreModule { }
