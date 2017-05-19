import { Injectable } from '@angular/core';
import { Project } from './project';
import { projets } from './mock-projects';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjects(): Promise<Project[]> {
  	return Promise.resolve(projets);
  }
  getProject(id: number): Promise<Project>{
  	return this.getProjects()
  				.then(projets => projets.find(project => project.id === id))
  }
    
}
