import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { GetStartedPageComponent } from './components/get-started-page/get-started-page.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  NgxMaskDirective,
  NgxMaskPipe,
  provideEnvironmentNgxMask,
} from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ContentPipe } from './pipes/content.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AccountSummaryComponent } from './components/account-summary/account-summary.component';
import { DemographicsComponent } from './components/demographics/demographics.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserDataService } from './services/user-data-service';
import { UserDataResolver } from './services/user-data-resolver-service';

import { FinancialSuccessPageComponent } from './components/financial-success-page/financial-success-page.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GlidePathComponent } from './components/glide-path/glide-path.component';
import { CashFlowComponent } from './components/cash-flow/cash-flow.component';
import { SnapshotComponent } from './components/snapshot/snapshot.component';
import { AccountSnapshotComponent } from './components/account-snapshot/account-snapshot.component';
import { AccountNetworthComponent } from './components/account-networth/account-networth.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    GetStartedPageComponent,
    WelcomePageComponent,
    ContentPipe,
    AccountSummaryComponent,
    DemographicsComponent,
    HeaderComponent,
    FooterComponent,
    FinancialSuccessPageComponent,
    GlidePathComponent,
    CashFlowComponent,
    SnapshotComponent,
    AccountSnapshotComponent,
    AccountNetworthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
  ],
  providers: [
    provideEnvironmentNgxMask(),
    UserDataService,
    UserDataResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
