# Testing Angular Tour Of Heroes
[![GitHub Actions status | xgirma/Testing-Angular-Tour-Of-Heroes](https://github.com/xgirma/Testing-Angular-Tour-Of-Heroes/workflows/NodeCI/badge.svg)](https://github.com/xgirma/Testing-Angular-Tour-Of-Heroes/actions?workflow=NodeCI)

Exploring the process of unit- and e2e-testing the [Tour of Heroes application](https://angular.io/tutorial). 
Focusing on the connection between application progression and the number of unit- and 
e2e-tests needs to be added, updated, and removed.
    
## Getting Started
Getting started instructions found [here](https://github.com/xgirma/Testing-Angular-Tour-Of-Heroes/blob/master/doc/getting.started.md). 
If you encounter an error you may find a solution [here](https://github.com/xgirma/Testing-Angular-Tour-Of-Heroes/blob/master/doc/common.errores.md).

## The Application Shell
Creating a new workspace using the Angular CLI, gives us a test configuration out-of-the-box and template tests.

In the table, we are describing, the type of test, which component is being tested, how many new tests are added, how many tests are 
being updated, how many testes being removed, and how many times the component gets revised.
 

| type| component  | new  | changed   | removed   | revision |
|---|---|:---:|:---:|:---|:---:|
|unit | app  |  3 | 0  | 0  |  0 |
|e2e | app  |  1 | 0  | 0  |  0 |
    
### Make changes to the application
In this section we will remove the default page, add a title, and fix failing tests.

:arrow_right: [AppComponent](https://github.com/xgirma/Testing-Angular-Tour-Of-Heroes/blob/master/doc/01.make.changes.to.the.application.md)

| type| component  | new  | changed   | removed   | revision |
|---|---|:---:|:---:|:---|:---:|
|unit | app  |  0 | 2  | 1  |  1 |
|e2e | app  |  1 | 0  | 1  |  0 |
    
> Ref: [The Application Shell](https://angular.io/tutorial/toh-pt0#the-application-shell)

> Tag: [Source](https://github.com/xgirma/Testing-Angular-Tour-Of-Heroes/tree/v0.0.2)

## The Hero Editor
Add the HeroesComponent to show and edit lists of hero information. 

:arrow_right: [HeroesComponent](https://github.com/xgirma/Testing-Angular-Tour-Of-Heroes/blob/master/doc/02.the.hero.editor.md)

| type| component  | new  | changed   | removed   | revision |
|---|---|:---:|:---:|:---|:---:|
|unit | app  |  0 | 0  | 0  |  0 |
|e2e | app  |  0 | 0  | 0  |  0 |
|e2e | heroes  |  0 | 0  | 0  |  0 |
|e2e | heroes  |  0 | 0  | 0  |  0 |

> Ref: [The Hero Editor](https://angular.io/tutorial/toh-pt1)

> Tag: [Source](https://github.com/xgirma/Testing-Angular-Tour-Of-Heroes/tree/v0.0.4)

## Display a Heroes List
Display a list of heroes.

:arrow_right: [Display a Heroes List](https://github.com/xgirma/Testing-Angular-Tour-Of-Heroes/blob/master/doc/03.display.a.heroes.list.md)

| type| component  | new  | changed   | removed   | revision |
|---|---|:---:|:---:|:---|:---:|
|unit | app  |  0 | 0  | 0  |  0 |
|e2e | app  |  0 | 0  | 0  |  0 |
|unit | heroes  |  0 | 0  | 0  |  0 |
|e2e | heroes  |  0 | 0  | 0  |  0 |

> Ref: [Display a Heroes List](https://angular.io/tutorial/toh-pt2#display-a-heroes-list)

> Tag: [Source](https://github.com/xgirma/Testing-Angular-Tour-Of-Heroes/tree/v0.0.5)

## Master/Detail Components

:arrow_right: [HeroDetailComponent](https://github.com/xgirma/Testing-Angular-Tour-Of-Heroes/blob/master/doc/04.master-detail.components.md)

| type| component  | new  | changed   | removed   | revision |
|---|---|:---:|:---:|:---|:---:|
|unit | app  |  0 | 0  | 0  |  0 |
|e2e | app  |  0 | 0  | 0  |  0 |
|unit | heroes  |  0 | 0  | 0  |  0 |
|e2e | heroes  |  0 | 0  | 0  |  0 |
|unit | hero-detail  |  0 | 0  | 0  |  0 |
|e2e | hero-detail  |  0 | 0  | 0  |  0 |

> Ref: [Master/Detail Components](https://angular.io/tutorial/toh-pt3#masterdetail-components)

> Tag: [Source](https://github.com/xgirma/Testing-Angular-Tour-Of-Heroes/tree/v0.0.6)

## Services

:arrow_right: [HeroService](https://github.com/xgirma/Testing-Angular-Tour-Of-Heroes/blob/master/doc/05.services.md)

| type| component  | new  | changed   | removed   | revision |
|---|---|:---:|:---:|:---|:---:|
|unit | app  |  0 | 0  | 0  |  0 |
|e2e | app  |  0 | 0  | 0  |  0 |
|unit | heroes  |  0 | 0  | 0  |  0 |
|e2e | heroes  |  0 | 0  | 0  |  0 |
|unit | hero-detail  |  0 | 0  | 0  |  0 |
|e2e | hero-detail  |  0 | 0  | 0  |  0 |
|unit | heroService  |  0 | 0  | 0  |  0 |
|e2e | heroService  |  0 | 0  | 0  |  0 |
|unit | messageService  |  0 | 0  | 0  |  0 |
|e2e | messageService  |  0 | 0  | 0  |  0 |
|unit | messagesComponent  |  0 | 0  | 0  |  0 |
|e2e | messagesComponent  |  0 | 0  | 0  |  0 |

> Ref: [HeroService](https://angular.io/tutorial/toh-pt4#services)

> Tag: [Source](https://github.com/xgirma/Testing-Angular-Tour-Of-Heroes/tree/v0.0.7)

## Routing

:arrow_right: [Routing](https://github.com/xgirma/Testing-Angular-Tour-Of-Heroes/blob/master/doc/06.routing.md)

| type| component  | new  | changed   | removed   | revision |
|---|---|:---:|:---:|:---|:---:|
|unit | app  |  0 | 0  | 0  |  0 |
|e2e | app  |  0 | 0  | 0  |  0 |
|unit | heroes  |  0 | 0  | 0  |  0 |
|e2e | heroes  |  0 | 0  | 0  |  0 |
|unit | hero-detail  |  0 | 0  | 0  |  0 |
|e2e | hero-detail  |  0 | 0  | 0  |  0 |
|unit | heroService  |  0 | 0  | 0  |  0 |
|e2e | heroService  |  0 | 0  | 0  |  0 |
|unit | messageService  |  0 | 0  | 0  |  0 |
|e2e | messageService  |  0 | 0  | 0  |  0 |
|unit | messagesComponent  |  0 | 0  | 0  |  0 |
|e2e | messagesComponent  |  0 | 0  | 0  |  0 |
|unit | dashboard |  0 | 0  | 0  |  0 |
|e2e | dashboard  |  0 | 0  | 0  |  0 |

> Ref: [Router](https://angular.io/tutorial/toh-pt5#routing)

> Tag: [Source](https://github.com/xgirma/Testing-Angular-Tour-Of-Heroes/tree/v0.0.8)

## HTTP

:arrow_right: [HTTP](https://github.com/xgirma/Testing-Angular-Tour-Of-Heroes/blob/master/doc/07.http.md)

| type| component  | new  | changed   | removed   | revision |
|---|---|:---:|:---:|:---|:---:|
|unit | app  |  0 | 0  | 0  |  0 |
|e2e | app  |  0 | 0  | 0  |  0 |
|unit | heroes  |  0 | 0  | 0  |  0 |
|e2e | heroes  |  0 | 0  | 0  |  0 |
|unit | hero-detail  |  0 | 0  | 0  |  0 |
|e2e | hero-detail  |  0 | 0  | 0  |  0 |
|unit | heroService  |  0 | 0  | 0  |  0 |
|e2e | heroService  |  0 | 0  | 0  |  0 |
|unit | messageService  |  0 | 0  | 0  |  0 |
|e2e | messageService  |  0 | 0  | 0  |  0 |
|unit | messagesComponent  |  0 | 0  | 0  |  0 |
|e2e | messagesComponent  |  0 | 0  | 0  |  0 |
|unit | dashboard |  0 | 0  | 0  |  0 |
|e2e | dashboard  |  0 | 0  | 0  |  0 |
|unit | heroSearch  |  0 | 0  | 0  |  0 |
|e2e | heroSearch  |  0 | 0  | 0  |  0 |

> Ref: [HTTP](https://angular.io/tutorial/toh-pt6#http)

> Tag: [Source]()
