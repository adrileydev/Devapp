import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebercursoComponent } from './rebercurso.component';

describe('RebercursoComponent', () => {
  let component: RebercursoComponent;
  let fixture: ComponentFixture<RebercursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebercursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebercursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
