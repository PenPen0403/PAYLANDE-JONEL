import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddManhwaPage } from './add-manhwa.page';

describe('AddManhwaPage', () => {
  let component: AddManhwaPage;
  let fixture: ComponentFixture<AddManhwaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddManhwaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
