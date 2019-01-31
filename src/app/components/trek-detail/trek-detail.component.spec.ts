import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekDetailComponent } from './trek-detail.component';

describe('TrekDetailComponent', () => {
  let component: TrekDetailComponent;
  let fixture: ComponentFixture<TrekDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrekDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrekDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
