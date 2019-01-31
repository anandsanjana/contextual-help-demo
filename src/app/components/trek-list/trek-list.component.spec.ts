import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekListComponent } from './trek-list.component';

describe('TrekListComponent', () => {
  let component: TrekListComponent;
  let fixture: ComponentFixture<TrekListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrekListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrekListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
