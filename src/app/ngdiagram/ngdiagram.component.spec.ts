import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdiagramComponent } from './ngdiagram.component';

describe('NgdiagramComponent', () => {
  let component: NgdiagramComponent;
  let fixture: ComponentFixture<NgdiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgdiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
