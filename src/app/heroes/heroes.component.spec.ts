import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a hero`, () => {
    expect(component.hero).toBeDefined();
  });

  it('should have title', () => {
    expect(compiled.querySelector('h2').textContent).toContain('WINDSTORM Details');
  });

  it('should have id and name', () => {
    const myHero = fixture.debugElement.queryAll(By.css('div'));
    expect(myHero[0].nativeElement.textContent).toEqual('id: 1');
    expect(myHero[1].nativeElement.textContent).toEqual('name: Windstorm');
  });
});
