import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyExpertiseComponent } from './technology-expertise.component';

describe('TechnologyExpertiseComponent', () => {
  let component: TechnologyExpertiseComponent;
  let fixture: ComponentFixture<TechnologyExpertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyExpertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
