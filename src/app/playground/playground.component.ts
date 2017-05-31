import { Component, OnInit } from '@angular/core';

import { PlaygroundProject } from '../playground-project';
import { PlaygroundProjectService } from '../playground-project.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
	playgroundProjects : PlaygroundProject[];

  	constructor(
  		private router: Router,
  		private playgroundProjectService: PlaygroundProjectService) { }

  	getPlaygroundProjects(): void{
  		this.playgroundProjectService.getPlaygroundProjects()
  		.then(projects => this.playgroundProjects = projects);
  	} 

  	ngOnInit(): void {
  		this.getPlaygroundProjects();
  	}

  	gotoDetail(project: PlaygroundProject): void {
      this.router.navigate(['/playground', project.id]);
  	}


}
