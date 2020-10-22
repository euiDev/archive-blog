import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardProfileComponent } from './billboard-profile.component';

describe('BillboardProfileComponent', () => {
  let component: BillboardProfileComponent;
  let fixture: ComponentFixture<BillboardProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillboardProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
