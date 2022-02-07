import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalDecoratorComponent } from './interval-decorator.component';

describe('IntervalDecoratorComponent', () => {
  let component: IntervalDecoratorComponent;
  let fixture: ComponentFixture<IntervalDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
