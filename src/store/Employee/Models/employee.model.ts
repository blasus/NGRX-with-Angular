import { FormControl } from "@angular/forms";

export interface IEmployee {
  id: string;
  name: string;
  email: string;
  department: string;
  salary: number;
  role: string;
}

export interface IEmployeeForm {
  name: FormControl<string>;
  email: FormControl<string>;
  department: FormControl<string>;
  role: FormControl<string>;
  salary: FormControl<number>;
}
