import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogparkListItemComponent } from './dogpark-list-item.component';

describe('DogparkListItemComponent', () => {
  let component: DogparkListItemComponent;
  let fixture: ComponentFixture<DogparkListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogparkListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogparkListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
