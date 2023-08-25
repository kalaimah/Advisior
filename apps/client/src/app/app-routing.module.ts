import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { GetStartedPageComponent } from './components/get-started-page/get-started-page.component';
import { AccountSummaryComponent } from './components/account-summary/account-summary.component';
import { UserDataResolver } from './services/user-data-resolver-service';
import { DemographicsComponent } from './components/demographics/demographics.component';
import { FinancialSuccessPageComponent } from './components/financial-success-page/financial-success-page.component';
import { GlidePathComponent } from './components/glide-path/glide-path.component';
import { CashFlowComponent } from './components/cash-flow/cash-flow.component';
import { SnapshotComponent } from './components/snapshot/snapshot.component';
import { AccountNetworthComponent } from './components/account-networth/account-networth.component';
import { AccountSnapshotComponent } from './components/account-snapshot/account-snapshot.component';

export const routes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full'},
    { path: 'welcome', component: WelcomePageComponent },
    { path:'start',component:GetStartedPageComponent },
    // { path: 'summary/:ssnid', component: AccountSummaryComponent },
    {path:'summary',component:AccountSummaryComponent},
    {path:'demographics',component:DemographicsComponent},
    { path: 'snapshot', component: SnapshotComponent,children: [
        {path:'financial-success',component:FinancialSuccessPageComponent },
        {path:'glide-path',component:GlidePathComponent},
        {path:'cash-flow',component:CashFlowComponent},
      ]},
    { path: 'networth', component: AccountNetworthComponent},
    { path: 'account-snapshot', component: AccountSnapshotComponent},


];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})

export class AppRoutingModule { }