import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountNetworthComponent } from './account-networth.component';

describe('AccountNetworthComponent', () => {
  let component: AccountNetworthComponent;
  let fixture: ComponentFixture<AccountNetworthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountNetworthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountNetworthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
