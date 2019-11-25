import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroesComponent } from './heroes.component';
import {HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HEROES } from '../mock-heroes';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ HeroesComponent, HeroDetailComponent ]
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
    expect(component.heroes).toBeDefined();
  });

  it('should have a list of heroes', () => {
    const heroes = fixture.debugElement.queryAll(By.css('.heroes > li'));
    HEROES.forEach((hero, index) => {
      expect(heroes[index].nativeElement.textContent).toContain(hero.id);
      expect(heroes[index].nativeElement.textContent).toContain(hero.name);
    });
  });
});

xdescribe('HeroesComponent: select', () => {
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
    component.heroes = HEROES;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title ${HEROES[0].name} Details`, async () => {
    const myHero = fixture.debugElement.queryAll(By.css('.badge'));
    myHero[0].nativeElement.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.selectedHero).toBeDefined();
    const title = fixture.debugElement.queryAll(By.css('h2'));
    expect(title[1].nativeElement.textContent)
      .toEqual(`${(HEROES[0].name).toUpperCase()} Details`);
  });

  it(`should have id ${HEROES[0].id}`, async () => {
    const myHero = fixture.debugElement.queryAll(By.css('.badge'));
    myHero[0].nativeElement.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.selectedHero).toBeDefined();
    expect(compiled.querySelector('div > div:nth-child(2)').textContent)
      .toEqual(`id: ${HEROES[0].id}`);
  });

  it(`should have text '${HEROES[0].name}' in the input`, async () => {
    const myHero = fixture.debugElement.queryAll(By.css('.badge'));
    myHero[0].nativeElement.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.selectedHero).toBeDefined();
    const inputBox = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputBox.value).toEqual(HEROES[0].name);
  });
});

xdescribe('HeroesComponent: input', () => {
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
    component.heroes = HEROES;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('input should accept new value', async () => {
    const myHero = fixture.debugElement.queryAll(By.css('.badge'));
    myHero[0].nativeElement.click();
    fixture.detectChanges();
    await fixture.whenStable();

    const inputBox = fixture.debugElement.query(By.css('input')).nativeElement;
    inputBox.value = 'Foo';
    inputBox.dispatchEvent(new Event('input'));
    expect(inputBox.value).toBe('Foo');
    fixture.detectChanges();

    expect(component.selectedHero).toBeDefined();
    const title = fixture.debugElement.queryAll(By.css('h2'));
    expect(title[1].nativeElement.textContent)
      .toEqual(`${(HEROES[0].name).toUpperCase()} Details`);

    expect(compiled.querySelector('li.selected').textContent).toContain('Foo');
  });
});
