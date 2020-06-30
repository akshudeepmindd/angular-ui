import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonscreenComponent } from './commonscreen.component';

describe('CommonscreenComponent', () => {
  let component: CommonscreenComponent;
  let fixture: ComponentFixture<CommonscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
