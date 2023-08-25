import { Component } from '@angular/core';
import { constants } from '../../constants/constants';

@Component({
  selector: 'capgemini-digital-advisor-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css'],
})
export class SnapshotComponent {
  constant: any = constants
  cashData: any = [
    {
      type: 'Current',
      firm: 'Chase',
      amount: '$3000'
    },
    {
      type: 'Savings',
      firm: 'BOA',
      amount: '$5000'
    }
  ]
  investmentData: any = [
    {
      type: 'Brokerage',
      firm: 'Robinhood',
      amount: '$3000'
    },
    {
      type: 'Retirement',
      firm: 'Fidelity',
      amount: '$5000'
    },
    {
      type: 'Education',
      firm: 'Vanguard',
      amount: '$7000'
    },
    {
      type: 'HSA',
      firm: 'Fidelity',
      amount: '$10000'
    },
  ]
  creditData = [
    {
      type: 'Card 1',
      firm: 'AMEX',
      amount: '$3000'
    },
    {
      type: 'Card 2',
      firm: 'Chase',
      amount: '$5000'
    },
  ]
  loansData = [
    {
      type: 'Auto',
      firm: 'DCU',
      outstandingAmount: '$8500',
      remainingTenure: '2 years'
    },
    {
      type: 'Home',
      firm: 'BOA',
      outstandingAmount: '$150225',
      remainingTenure: '4 years 8 months'
    },
  ]
  insuranceData = [
    {
      type: 'Term Life',
      firm: 'Metlife',
      amount: '$100000'
    },
    {
      type: 'Medical',
      firm: 'Guardian',
      amount: '$500000'
    }
  ]
  otherAssetsData = [
    {
      type: 'Primary House',
      amount: '$200000'
    },
  ]
}
