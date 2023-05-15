import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTableDeviceComponent } from './advanced-table-device.component';

describe('AdvancedTableDeviceComponent', () => {
  let component: AdvancedTableDeviceComponent;
  let fixture: ComponentFixture<AdvancedTableDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedTableDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedTableDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
