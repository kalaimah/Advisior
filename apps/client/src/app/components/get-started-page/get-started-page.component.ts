import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  UntypedFormBuilder,  UntypedFormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data-service';
import { catchError } from 'rxjs';

@Component({
  selector: 'capgemini-digital-advisor-get-started-page',
  templateUrl: './get-started-page.component.html',
  styleUrls: ['./get-started-page.component.css'],
})

export class GetStartedPageComponent implements OnInit {
  ssnForm!: UntypedFormGroup;
  phoneNumber!:string;
  userData: any

  constructor(private formBuilder: UntypedFormBuilder, 
    private router: Router,
    private userService: UserDataService) {}

    ngOnInit(): void {
      this.ssnForm = this.formBuilder.group({
        ssnName: ['', [Validators.minLength(9), Validators.maxLength(9),Validators.required]]
      })
    }
  
  get ssnName() {
    return this.ssnForm.get('ssnName');
 }

 formSubmit()
 {
   const ssnValue = this.ssnForm.controls['ssnName'].value
   const formattedSsn = this.formatSsn(ssnValue)
  //  this.userService.setUserId(formattedSsn)

  this.userService.getUserData(formattedSsn).subscribe({
    next: (data) => {
      this.userData = data
      this.router.navigate(['/summary', formattedSsn])
    },
    error: (error) => {
      this.ssnForm.controls['ssnName'].setErrors({'incorrect': true})
    }
  })
 }

 formatSsn(value: string) {
  const numericValue = value.replace(/\D/g, '');
  const formattedValue = numericValue.replace(/^(\d{3})(\d{2})(\d{4})$/, '$1-$2-$3');
  return formattedValue;
 }
 
}
