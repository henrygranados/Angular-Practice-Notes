import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTypescriptComponent } from './test-typescript.component';

describe('TestTypescriptComponent', () => {
  let component: TestTypescriptComponent;
  let fixture: ComponentFixture<TestTypescriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTypescriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
