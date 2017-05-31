import { Component, OnInit } from '@angular/core';

import { Project } from '../project';
import { ProjectService } from '../project.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {

	projects: Project[];

  	constructor(
  		private router: Router,
    	private projectService: ProjectService){ }
	
  	getProjects(): void {
    	this.projectService.getProjects().then(projects => this.projects = projects);
  	}

  	ngOnInit(): void {
  		this.getProjects();
  	}

  	gotoDetail(project: Project): void {
      this.router.navigate(['/project-detail', project.id]);
  	}

}
