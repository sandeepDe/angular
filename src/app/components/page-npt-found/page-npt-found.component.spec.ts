import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNptFoundComponent } from './page-npt-found.component';

describe('PageNptFoundComponent', () => {
  let component: PageNptFoundComponent;
  let fixture: ComponentFixture<PageNptFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNptFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNptFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
