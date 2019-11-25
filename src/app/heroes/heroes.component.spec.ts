import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
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
    // expect(compiled.querySelector('h2').textContent).toContain('WINDSTORM Details');
    const myHero = fixture.debugElement.queryAll(By.css('h2'));
    expect(myHero[1].nativeElement.textContent).toContain('WINDSTORM Details');
  });

  it('should have id', () => {
    const myHero = fixture.debugElement.queryAll(By.css('div'));
    expect(myHero[0].nativeElement.textContent).toEqual('id: 1');
  });
});

describe('HeroesComponent: input', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
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

  it(`should have editable hero name`, () => {
    const inputBox = fixture.debugElement.query(By.css('input')).nativeElement;
    inputBox.value = 'Dr. Nice';
    inputBox.dispatchEvent(new Event('input'));

    expect(inputBox.value).toBe('Dr. Nice');
    fixture.detectChanges();

    // two way binding
    // expect(compiled.querySelector('h2').textContent)
    //   .toEqual((component.hero.name).toUpperCase() + ' Details');
    // const myHero = fixture.debugElement.queryAll(By.css('h2'));
    const myHero = fixture.debugElement.queryAll(By.css('h2'));
    expect(myHero[1].nativeElement.textContent)
      .toEqual((component.hero.name).toUpperCase() + ' Details');
  });
});
