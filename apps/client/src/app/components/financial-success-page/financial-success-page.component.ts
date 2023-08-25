import { Component } from '@angular/core';

@Component({
  selector: 'capgemini-digital-advisor-financial-success-page',
  templateUrl: './financial-success-page.component.html',
  styleUrls: ['./financial-success-page.component.css'],
})
export class FinancialSuccessPageComponent {
  progressValue: number = 70
  calculatedAmount: any = '$3000'
  pieChartData: any = [
    {
      name:'Financial Success',
      value: 70
    },
    {
      name:'Potential Success',
      value: 30
    }
  ]
  
  colorScheme: any = {
    domain: ['lightblue', 'blue'],
  };
}
