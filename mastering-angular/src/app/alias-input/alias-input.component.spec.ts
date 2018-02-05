import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliasInputComponent } from './alias-input.component';

describe('AliasInputComponent', () => {
  let component: AliasInputComponent;
  let fixture: ComponentFixture<AliasInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliasInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliasInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
