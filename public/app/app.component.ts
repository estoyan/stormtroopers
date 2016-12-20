import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <h1>The Superheroes Universe!</h1>
  <nav>
    <a routerLink="/characters" routerLinkActive="active">Characters</a>
  </nav>
  <router-outlet>
  </router-outlet>
  `
})
export class AppComponent { }
