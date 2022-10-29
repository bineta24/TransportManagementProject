import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallTruckComponent } from './install-truck.component';

describe('InstallTruckComponent', () => {
  let component: InstallTruckComponent;
  let fixture: ComponentFixture<InstallTruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstallTruckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
