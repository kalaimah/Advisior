import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinancialSuccessPageComponent } from './financial-success-page.component';

describe('FinancialSuccessPageComponent', () => {
  let component: FinancialSuccessPageComponent;
  let fixture: ComponentFixture<FinancialSuccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinancialSuccessPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FinancialSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
