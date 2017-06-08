import { Component } from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectService]
})

export class AppComponent {
  
  name = 'Irène Ravelonarivo';

  projects: Project[];

  constructor(private projectService: ProjectService) { }
 
}
