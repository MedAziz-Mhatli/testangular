import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercherVideosComponentComponent } from './chercher-videos-component.component';

describe('ChercherVideosComponentComponent', () => {
  let component: ChercherVideosComponentComponent;
  let fixture: ComponentFixture<ChercherVideosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChercherVideosComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChercherVideosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
