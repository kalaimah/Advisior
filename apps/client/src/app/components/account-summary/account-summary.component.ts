import { Component, OnDestroy, OnInit } from '@angular/core';
import { constants } from '../../constants/constants';
import { ActivatedRoute, Params } from '@angular/router';
import { UserDataService } from '../../services/user-data-service';
import { Subject, mergeMap, takeUntil } from 'rxjs';

@Component({
  selector: 'capgemini-digital-advisor-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css'],
})
export class AccountSummaryComponent implements OnInit {
  ssnId: any
  userData: any
  constant: any = constants
  cashData: any = []
  investmentData: any = []
  creditData: any = []
  loansData: any = []
  insuranceData: any = []
  otherAssetsData: any = []
  totalCash: number = 0
  totalInvestment: number = 0
  totalCredit: number = 0
  totalLoan: number = 0
  totalInsurance: number = 0
  totalOtherAssets: number = 0
  private destroy$ = new Subject<void>()

  constructor(private route: ActivatedRoute, private userService: UserDataService) {}

  ngOnInit(): void {
    // this.route.data.subscribe((data) => {
    //   this.userData = data['resolvedData']
    //   console.log('user data', this.userData)
    // })
    // this.cashData = this.userData[0].cash
    // this.investmentData = this.userData[0].investment
    // this.creditData = this.userData[0].credit
    // this.loansData = this.userData[0].loan
    // this.insuranceData = this.userData[0].insurance
    // this.otherAssetsData = this.userData[0].other_asset


    // this.userService.getUserId().pipe(
    //   takeUntil(this.destroy$),
    //   mergeMap((id) => {
    //     return this.userService.getUserData(id)
    //   })
    // )
    // .subscribe((data) => {
    //   this.userData = data
    //   console.log('user data', this.userData)
    // })
    // this.cashData = this.userData.cash
    // this.investmentData = this.userData.investment
    // this.creditData = this.userData.credit
    // this.loansData = this.userData.loan
    // this.insuranceData = this.userData.insurance
    // this.otherAssetsData = this.userData.other_asset

    this.route.params.subscribe((params: Params) => {
      this.ssnId = params['ssnid']
    })

    this.userService.getUserData(this.ssnId).subscribe((data) => {
      this.userData = data
      this.cashData = this.userData[0]?.cash
      this.investmentData = this.userData[0]?.investment
      this.creditData = this.userData[0]?.credit
      this.loansData = this.userData[0]?.loan
      this.insuranceData = this.userData[0]?.insurance
      this.otherAssetsData = this.userData[0]?.other_asset
      this.calculateTotalCash()
      this.calculateTotalInvestment()
      this.calculateTotalCredit()
      this.calculateTotalLoan()
      this.calculateTotalInsurance()
      this.calculateTotalOtherAssets()
    })
  }

  calculateTotalCash() {
    for(let i = 0 ; i < this.cashData.length; i++) {
      this.totalCash = this.totalCash + this.cashData[i].amount
    }
  }

  calculateTotalInvestment() {
    for(let i = 0 ; i < this.investmentData.length; i++) {
      this.totalInvestment = this.totalInvestment + this.investmentData[i].amount
    }
  }

  calculateTotalCredit() {
    for(let i = 0 ; i < this.creditData.length; i++) {
      this.totalCredit = this.totalCredit + this.creditData[i].amount
    }
  }

  calculateTotalLoan() {
    for(let i = 0 ; i < this.loansData.length; i++) {
      this.totalLoan = this.totalLoan + this.loansData[i].outstanding_amount
    }
  }

  calculateTotalInsurance() {
    for(let i = 0 ; i < this.insuranceData.length; i++) {
      this.totalInsurance = this.totalInsurance + this.insuranceData[i].amount
    }
  }

  calculateTotalOtherAssets() {
    for(let i = 0 ; i < this.otherAssetsData.length; i++) {
      this.totalOtherAssets = this.totalOtherAssets + this.otherAssetsData[i].amount
    }
  }

  // ngOnDestroy(): void {
  //   this.destroy$.next();
  //   this.destroy$.complete();
  // }
}
