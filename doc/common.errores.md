# Common Errors

## 'app-xyz' is not a known element

```text
Failed: Template parse errors:
'app-heroes' is not a known element:
1. If 'app-heroes' is an Angular component, then verify that it is part of this module.
2. If 'app-heroes' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message. ("<h1>{{title}}</h1>
[ERROR ->]<app-heroes></app-heroes>
"): ng:///DynamicTestModule/AppComponent.html@1:0
```

solution: add the missing element in the declaration

```diff
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
+ import { HeroesComponent } from './heroes/heroes.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        AppComponent,
+        HeroesComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Tour of Heroes'`, () => {
    expect(component.title).toEqual('Tour of Heroes');
  });
});
```

## Port 4200 is already in use. Use '--port' to specify a different port.
When run e2e test while the app is running on port 4200
```text
An unhandled exception occurred: Port 4200 is already in use. Use '--port' to specify a different port.
See "/private/var/folders/f8/zq_1ljwd42q8n125_8nrz4vr0000gp/T/ng-BAUxhI/angular-errors.log" for further details.
```
Let the e2e test run on a different port, e.g. 4201

### :: angular.json
```json
"e2e": {
          "builder": "@angular-devkit/build-angular:protractor",
          "options": {
            "protractorConfig": "e2e/protractor.conf.js",
            "devServerTarget": "Testing-Angular-Tour-Of-Heroes:serve",
            "port": 2401
          },
          "configurations": {
            "production": {
              "devServerTarget": "Testing-Angular-Tour-Of-Heroes:serve:production"
            }
          }
        }
```

## Template parse errors: Can't bind to 'ngModel' since it isn't a known property of 'input'

```text
Error: Template parse errors:
Can't bind to 'ngModel' since it isn't a known property of 'input'. ("
<div>
  <label>name:
    <input [ERROR ->][(ngModel)]="hero.name" placeholder="name"/>
  </label>
</div>
"): ng:///DynamicTestModule/HeroesComponent.html@4:11
```

solution: for view component, add `FormsModule`
```diff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
+ import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
+    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

solution 2: for the spec(test), add ``

```diff
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
    expect(compiled.querySelector('h2').textContent).toContain('WINDSTORM Details');
  });

  it('should have id and name', () => {
    const myHero = fixture.debugElement.queryAll(By.css('div'));
    expect(myHero[0].nativeElement.textContent).toEqual('id: 1');
    expect(myHero[1].nativeElement.textContent).toEqual('name: Windstorm');
  });
});
```

## Can't bind to 'routerLink' since it isn't a known property of 'a'.

```text
Failed: Template parse errors:
Can't bind to 'routerLink' since it isn't a known property of 'a'. ("
<ul class="heroes">
  <li *ngFor="let hero of heroes">
    <a [ERROR ->]routerLink="/detail/{{hero.id}}">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </a>"): ng:///DynamicTestModule/HeroesComponent.html@3:7
```

solution: add RouterTestingModule

```diff
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
+ import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard.component';
import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
+      imports: [RouterTestingModule],
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have four heroes', () => {
    expect(component.heroes.length).toEqual(4);
  });

  it('should have title', () => {
    expect(compiled.querySelector('h3').textContent).toEqual(`Top Heroes`);
  });

  it(`should have hero names`, () => {
    const heroes = fixture.debugElement.queryAll(By.css('h4'));
    component.heroes.forEach( (hero, index) => {
      expect(heroes[index].nativeElement.textContent).not.toEqual('');
    });
  });

  it(`should have hero '/details/:id' link`, () => {
    const heroes = fixture.debugElement.queryAll(By.css('a'));
    component.heroes.forEach( (hero, index) => {
      expect(heroes[index].nativeElement.getAttribute('href'))
        .toContain('detail');
    });
  });
});
```

## NullInjectorError: No provider for ActivatedRoute!

```text
NullInjectorError: StaticInjectorError(DynamicTestModule)[HeroDetailComponent -> ActivatedRoute]: 
  StaticInjectorError(Platform: core)[HeroDetailComponent -> ActivatedRoute]: 
    NullInjectorError: No provider for ActivatedRoute!
```

Solution add add RouterTestingModule, see above

##  NullInjectorError: No provider for HttpClient!
```text
NullInjectorError: StaticInjectorError(DynamicTestModule)[HeroService -> HttpClient]: 
  StaticInjectorError(Platform: core)[HeroService -> HttpClient]: 
    NullInjectorError: No provider for HttpClient!
```

solution
```diff
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
+ import { HttpClientModule } from '@angular/common/http';

import { HeroSearchComponent } from './hero-search.component';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSearchComponent ] ,
+      imports: [ HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```
