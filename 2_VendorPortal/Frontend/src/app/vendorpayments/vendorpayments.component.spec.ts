import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorpaymentsComponent } from './vendorpayments.component';

describe('VendorpaymentsComponent', () => {
  let component: VendorpaymentsComponent;
  let fixture: ComponentFixture<VendorpaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorpaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
