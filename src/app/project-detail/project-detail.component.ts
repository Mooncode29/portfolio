import { Component, OnInit, Input } from '@angular/core';

import { Location }                 from '@angular/common';
import { ActivatedRoute, Params }   from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})

export class ProjectDetailComponent implements OnInit {

	project : Project;

  	constructor(
  		private projetService: ProjectService,
  		private location: Location,
  		private route: ActivatedRoute
  		) { }

	goBack(): void {
  		this.location.back();
	}

	ngOnInit(): void {
  		this.route.params
      .switchMap((params: Params) => this.projetService.getProject(+params['id']))
      .subscribe(project => this.project = project);
  }  

}
