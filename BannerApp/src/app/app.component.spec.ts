import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));


  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.componentInstance;
  });

  it('should create the app', function () {
    expect(app).toBeTruthy();
  });

  it('Image slide should be displayed for 4 sec', function () {
      expect(app.ImageDisplayTime).toEqual(4000);
  });

  it('Video slide should be displayed for 35 sec', function () {
      expect(app.VideoDisplayTime).toEqual(35000);
  });

  it('Image Elements are created', function () {
      debugElement = fixture.debugElement.query(By.css('div.banner_container'));
      element = debugElement.nativeElement;
      expect(element.innerHTML).toContain('<img');
  });

  it('Video Element is created', function () {
      expect(element.innerHTML).toContain('<video');
  });

});
