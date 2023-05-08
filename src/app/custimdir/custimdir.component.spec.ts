import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustimdirComponent } from './custimdir.component';

describe('CustimdirComponent', () => {
  let component: CustimdirComponent;
  let fixture: ComponentFixture<CustimdirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustimdirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustimdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
