import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FAUNADB_CLIENT, client } from './fauna-dbclient.service';
import { ResumeContainerComponent } from './resume-container/resume-container.component';
import { HeadersComponent } from './headers/headers.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeContainerComponent,
    HeadersComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: FAUNADB_CLIENT, useValue: client}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
