import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BvUbkhInfoComponent } from './bv-ubkh-info.component';

describe('BvUbkhInfoComponent', () => {
  let component: BvUbkhInfoComponent;
  let fixture: ComponentFixture<BvUbkhInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BvUbkhInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BvUbkhInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
