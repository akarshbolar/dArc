import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesskeySecretkeyComponent } from './accesskey-secretkey.component';

describe('AccesskeySecretkeyComponent', () => {
  let component: AccesskeySecretkeyComponent;
  let fixture: ComponentFixture<AccesskeySecretkeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesskeySecretkeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesskeySecretkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
