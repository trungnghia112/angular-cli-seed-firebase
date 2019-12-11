import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSplashScreenComponent } from './splash-screen.component';

describe('SharedSplashScreenComponent', () => {
  let component: SharedSplashScreenComponent;
  let fixture: ComponentFixture<SharedSplashScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedSplashScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSplashScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
