import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VgPipComponent } from './vg-pip.component';

describe('VgPipComponent', () => {
  let component: VgPipComponent;
  let fixture: ComponentFixture<VgPipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VgPipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgPipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
