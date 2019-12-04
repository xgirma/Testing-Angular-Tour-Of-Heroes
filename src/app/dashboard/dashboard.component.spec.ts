import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard.component';
import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
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
