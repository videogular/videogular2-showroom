import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMediaComponent } from './custom-media.component';

describe('CustomMediaComponent', () => {
  let component: CustomMediaComponent;
  let fixture: ComponentFixture<CustomMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
