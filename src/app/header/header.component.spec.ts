import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render proper title', () => {
    // GIVEN:
    // assigning value to variable
    component.appTitle = 'TEST';
    // refersh of component
    fixture.detectChanges();

    // WHEN:
    // assigning variables;
    const h1 = fixture.nativeElement.querySelector('h1');
    const text = h1.textContent;

    // THEN:
    // test check
    expect(text).toContain('TEST');
  });
});
