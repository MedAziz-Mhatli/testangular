import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierVideoComponent } from './modifier-video.component';

describe('ModifierVideoComponent', () => {
  let component: ModifierVideoComponent;
  let fixture: ComponentFixture<ModifierVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
