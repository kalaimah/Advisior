import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlidePathComponent } from './glide-path.component';

describe('GlidePathComponent', () => {
  let component: GlidePathComponent;
  let fixture: ComponentFixture<GlidePathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlidePathComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GlidePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
