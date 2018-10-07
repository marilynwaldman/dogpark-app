import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogparksComponent } from './dogparks.component';

describe('DogparksComponent', () => {
  let component: DogparksComponent;
  let fixture: ComponentFixture<DogparksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogparksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogparksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
