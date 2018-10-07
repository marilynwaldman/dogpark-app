import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogparkListComponent } from './dogpark-list.component';

describe('DogparkListComponent', () => {
  let component: DogparkListComponent;
  let fixture: ComponentFixture<DogparkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogparkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogparkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
