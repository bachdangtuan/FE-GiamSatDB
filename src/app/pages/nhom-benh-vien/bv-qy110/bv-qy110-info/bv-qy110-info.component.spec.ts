import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BvQy110InfoComponent } from './bv-qy110-info.component';

describe('BvQy110InfoComponent', () => {
  let component: BvQy110InfoComponent;
  let fixture: ComponentFixture<BvQy110InfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BvQy110InfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BvQy110InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
