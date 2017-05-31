import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PlaygroundComponent } from './playground/playground.component';
import { AboutComponent } from './about/about.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

import { ProjectService } from './project.service';
import { PlaygroundProjectService } from './playground-project.service';

const routes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'about',  component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'playground',     component: PlaygroundComponent },
  { path: 'project-detail/:id',     component: ProjectDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    PlaygroundComponent,
    AboutComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProjectService, PlaygroundProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
