import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'capgemini-digital-advisor-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.css'],
})
export class DemographicsComponent implements OnInit{
  numOfChildren!:number[];
  public demographicsForm!: FormGroup
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
  //  -
  //     dob:new FormControl('',[Validators.required]),
  //     income:new FormControl('',[Validators.required]),
  //     expense:new FormControl('',Validators.required),
  //     marital_Status:new FormControl(''),
  //     hasChildren: new FormControl(''),
  //     children:new FormArray(
  //       new FormControl('')
  
  // )    
  // });
  this.demographicsForm = this.formBuilder.group({
    dob: ['',Validators.required],
    income: ['', Validators.required],
    expense: ['', Validators.required],
    marital_Status: ['', Validators.required],
    hasChildren:[''],
    children:this.formBuilder.array([])
});
  this.num();
 }

  addChild()
  {
    const control=<FormArray>this.demographicsForm.controls['children'];
    control.push(
      new FormGroup({
        dobChild:new FormControl(''),
      })
    );
    this.num();
  }
num()
{
  this.numOfChildren=Array((this.demographicsForm.get('children') as FormArray).length).fill(1);
  // console.log(this.numOfChildren)
  
}
  removeChild(index: number)
  {
    const control=<FormArray>this.demographicsForm.controls['children'];
    control.removeAt(index);
    this.num();
  }
  saveChild(){
    const child=this.demographicsForm.value;
  }
  get f() {
    return this.demographicsForm.controls
    }
    get children(){
      return this.demographicsForm.controls['children'] as FormArray ;
                          
    }
    checkChildrenStatus(){
      if(this.demographicsForm.controls['hasChildren'].value ==='Yes')
      {
        const child=this.formBuilder.group({
        dobChild: [new Date(),Validators.required]
      });
     this.children.push(child);
      }
      
      
    }




 formSubmit(demographicsForm: FormGroup):void
 {
  console.log(demographicsForm.value);
 }
 
}