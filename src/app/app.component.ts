import {
  FormControl,
  FormGroup,
  AbstractControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedToppings: string[] = [];
  submitted: boolean = false;

  testForm = new FormGroup({
    selectedToppings: new FormControl('', [
      Validators.required,
      this.isInvalidSelectionValidator(),
    ]),
  });

  toppingChange(value: any) {
    /////////////this.selectedToppings = value;
    //this may be used in the ngOnInit line 106
    this.testForm.get('selectedToppings')?.updateValueAndValidity();
  }

  isInvalidSelectionValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const selectedToppings = control.value as string[];

      if (
        selectedToppings.includes('Extra cheese') &&
        (selectedToppings.includes('Mushroom') ||
          selectedToppings.includes('Pepperoni') ||
          selectedToppings.includes('Sausage'))
      ) {
        return { invalidSelection: true };
      } else if (
        selectedToppings.includes('Onion') &&
        (selectedToppings.includes('Mushroom') ||
          selectedToppings.includes('Pepperoni') ||
          selectedToppings.includes('Sausage'))
      ) {
        return { invalidSelection: true };
      }

      return null;
    };
  }
  // isInvalidSelection(): any  {
  //   if (
  //     this.selectedToppings.includes('Extra cheese') &&
  //     (this.selectedToppings.includes('Mushroom') ||
  //       this.selectedToppings.includes('Pepperoni') ||
  //       this.selectedToppings.includes('Sausage'))
  //   ) {
  //     return true;
  //   } else if (
  //     this.selectedToppings.includes('Onion') &&
  //     (this.selectedToppings.includes('Mushroom') ||
  //       this.selectedToppings.includes('Pepperoni') ||
  //       this.selectedToppings.includes('Sausage'))
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  onSubmit(event: any) {
    console.log(event);
    //this.submitted=true;
    // if(this.testForm.get('selectedToppings')?)
  }

  /*checkbox change event*/
  onChange(event: any) {
    console.log(event);
  }
}
