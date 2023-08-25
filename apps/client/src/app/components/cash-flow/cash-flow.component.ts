import { Component } from '@angular/core';

@Component({
  selector: 'capgemini-digital-advisor-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.css'],
})
export class CashFlowComponent {
  cashflowData = [
    {cashflow:2023,inflow:166000,outflow:'',Totalcorpus:'179280'},
    {cashflow:2024,inflow:216207,outflow:'',Totalcorpus:'233504'},
    {cashflow:2025,inflow:271364,outflow:'',Totalcorpus:'293074'},
    {cashflow:2025,inflow:331871,outflow:'',Totalcorpus:'358421'},
    {cashflow:2026,inflow:398157,outflow:'',Totalcorpus:'430010'},
    {cashflow:2027,inflow:470685,outflow:'',Totalcorpus:'508340'},
    {cashflow:2028,inflow:549952,outflow:100000,Totalcorpus:'493948'},
    {cashflow:2029,inflow:536491,outflow:'',Totalcorpus:'579411'},
    {cashflow:2030,inflow:622878,outflow:'',Totalcorpus:'672709'},
    {cashflow:2031,inflow:717090,outflow:'',Totalcorpus:'774457'},
    {cashflow:2032,inflow:819737,outflow:'',Totalcorpus:'885316'},
   ];
}
