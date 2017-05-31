import { Injectable } from '@angular/core';
import { PlaygroundProject } from './playground-project';
import { playgroundProjects } from './mock-playground-projects';

import 'rxjs/add/operator/toPromise'

@Injectable()
export class PlaygroundProjectService {

  constructor() { }

  getPlaygroundProjects(): Promise<PlaygroundProject[]>{
  	return Promise.resolve(playgroundProjects);
  }

  getPlaygroundProject(id: number): Promise<PlaygroundProject>{
  	return this.getPlaygroundProjects()
  	.then(playgroundProjects => playgroundProjects.find(playgroundProject => playgroundProject.id === id))
  }

}
