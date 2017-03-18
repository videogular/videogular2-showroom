import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeViewerComponent } from './time-viewer.component';

describe('TimeViewerComponent', () => {
  let component: TimeViewerComponent;
  let fixture: ComponentFixture<TimeViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
