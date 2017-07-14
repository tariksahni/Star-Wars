import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlanetComponent } from './search-planet.component';

describe('SearchPlanetComponent', () => {
  let component: SearchPlanetComponent;
  let fixture: ComponentFixture<SearchPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
