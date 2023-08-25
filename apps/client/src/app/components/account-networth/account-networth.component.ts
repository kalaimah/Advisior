import { Component,  OnInit } from '@angular/core';
import { constants } from '../../constants/constants';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../../services/user-data-service';
import { Subject } from 'rxjs';

@Component({
  selector: 'capgemini-digital-advisor-account-networth',
  templateUrl: './account-networth.component.html',
  styleUrls: ['./account-networth.component.css'],
})
export class AccountNetworthComponent implements OnInit {
  ssnId: any
  userData: any
  constant: any = constants
  cashData: any = []
  investmentData: any = []
  creditData: any = []
  loansData: any = []
  insuranceData: any = []
  otherAssetsData: any = []
  

  constructor(private route: ActivatedRoute, private userService: UserDataService) {}

  ngOnInit(): void {
    
    this.userService.getUserData(this.ssnId).subscribe((data) => {
      
      console.log('user data', this.userData)
      
      
    })
  }

  
}
