import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBemComponent } from './test-bem.component';

describe('TestBemComponent', () => {
  let component: TestBemComponent;
  let fixture: ComponentFixture<TestBemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
