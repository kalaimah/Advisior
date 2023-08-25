import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountSnapshotComponent } from './account-snapshot.component';

describe('SnapshotComponent', () => {
  let component: AccountSnapshotComponent;
  let fixture: ComponentFixture<AccountSnapshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountSnapshotComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
