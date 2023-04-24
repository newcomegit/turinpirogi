import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XoComponent } from './xo.component';

describe('XoComponent', () => {
  let component: XoComponent;
  let fixture: ComponentFixture<XoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
