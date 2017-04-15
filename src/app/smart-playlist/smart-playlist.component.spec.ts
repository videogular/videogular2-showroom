import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPlaylistComponent } from './smart-playlist.component';

describe('SmartPlaylistComponent', () => {
  let component: SmartPlaylistComponent;
  let fixture: ComponentFixture<SmartPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
