import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BvDtInfoComponent } from './bv-dt-info.component';

describe('BvDtInfoComponent', () => {
  let component: BvDtInfoComponent;
  let fixture: ComponentFixture<BvDtInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BvDtInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BvDtInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
