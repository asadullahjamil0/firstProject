import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyClassComponent } from './dummy-class.component';

describe('DummyClassComponent', () => {
  let component: DummyClassComponent;
  let fixture: ComponentFixture<DummyClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
