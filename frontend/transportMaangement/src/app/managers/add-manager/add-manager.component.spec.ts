import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManagerComponent } from './add-manager.component';

describe('AddManagerComponent', () => {
  let component: AddManagerComponent;
  let fixture: ComponentFixture<AddManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
