import { Component, OnInit } from '@angular/core';
import { ResourceModel } from '../resource.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ResourceService } from '../resource.service';
import { SnackbarService } from '../../../services/snackbar.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'lib-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.scss']
})
export class ResourceFormComponent implements OnInit {

  btnLabel: string = 'Submit';
  formLabel: string = 'Add Resource';
  resourceId: string;
  resource: ResourceModel = {
    resourceName: ''
  };
  beginProcess: boolean = false;
  isViewForm: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private resourceService: ResourceService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.resourceId = this.route.snapshot.paramMap.get('id');
      const url = this.router.url;
      if (url.includes('view')) {
        this.isViewForm = true;
        this.formLabel = 'View Resource';
      } else {
        this.btnLabel = 'Update'
        this.formLabel = 'Edit Resource';
      }
      this.initFormOnUpdate();
    }
  }

  initFormOnUpdate(): void {
    this.spinner();
    this.resourceService.getOneResource(this.resourceId).subscribe(res => {
      const data = res.data;
      this.resource = {
        resourceName: data.resourceName
      };
    }, err => {
      this.snackbarService.error(err);
    }).add(() => {
      this.spinner();
    })
  }

  onClickResourceBtn(): void {
    if (this.resourceId) {
      // Update resource service
      this.updateResource();
    } else {
      // Add resource service
      this.addResource();
    }
  }

  addResource(): void {
    this.spinner();
    const payload: ResourceModel = this.resource;
    this.resourceService.addResource(payload).subscribe(res => {
      this.snackbarService.success('Successfully added');
      this.router.navigate(['/admin/resources']);
    }, (err: HttpErrorResponse) => {
      this.snackbarService.error(err);
    }).add(() => {
      this.spinner();
    });
  }

  updateResource(): void {
    const payload: ResourceModel = this.resource;
    this.resourceService.updateResource(payload, this.resourceId).subscribe(res => {
      this.snackbarService.success('Successfully updated');
      this.router.navigate(['/admin/resources']);
    }, (err: HttpErrorResponse) => {
      this.snackbarService.error(err);
    }, () => {
      this.spinner();
    });
  }

  spinner(): void {
    this.beginProcess = !this.beginProcess;
  }

}
