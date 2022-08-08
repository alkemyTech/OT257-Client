import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActiviyComponent } from './list-activiy.component';

describe('ListActiviyComponent', () => {
  let component: ListActiviyComponent;
  let fixture: ComponentFixture<ListActiviyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActiviyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActiviyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
