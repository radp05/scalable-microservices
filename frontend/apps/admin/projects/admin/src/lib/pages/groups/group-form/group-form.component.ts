import { Component, OnInit } from '@angular/core';
import { GroupModel } from '../group.model';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupService } from '../group.service';
import { SnackbarService } from '../../../services/snackbar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ResourceService } from '../../resources/resource.service';
import { scaleTransition } from '../../../components/animation/animation.component';

@Component({
  selector: 'lib-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss'],
  animations: [scaleTransition()]
})
export class GroupFormComponent implements OnInit {

  btnLabel: string = 'Submit';
  formLabel: string = 'Add Group';
  groupId: string;
  group: GroupModel = {
    groupName: '',
    resourceIds: []
  };
  beginProcess: boolean = false;
  isViewForm: boolean = false;
  resourceList: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private groupService: GroupService,
    private snackbarService: SnackbarService,
    private resourceService: ResourceService
  ) {
    this.initResourceList();
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.groupId = this.route.snapshot.paramMap.get('id');
      const url = this.router.url;
      if (url.includes('view')) {
        this.isViewForm = true;
        this.formLabel = 'View Group';
      } else {
        this.btnLabel = 'Update'
        this.formLabel = 'Edit Group';
      }
      this.initFormOnUpdate();
    }
  }

  initResourceList(): void {
    this.resourceService.getAllResources().subscribe(res => {
      this.resourceList = res.data;
    }, err => {
      this.snackbarService.error(err);
    });
  }

  initFormOnUpdate(): void {
    this.spinner();
    this.groupService.getOneGroup(this.groupId).subscribe(res => {
      const data = res.data;
      this.group = {
        groupName: data.groupName,
        resourceIds: data.resourceDetails.map((data: any) => data._id)
      };
      console.log('???group', this.group);
    }, err => {
      this.snackbarService.error(err);
    }).add(() => {
      this.spinner();
    })
  }

  onClickGroupBtn(): void {
    if (this.groupId) {
      // Update group service
      this.updateGroup();
    } else {
      // Add group service
      this.addGroup();
    }
  }

  addGroup(): void {
    this.spinner();
    const payload: GroupModel = this.group;
    this.groupService.addGroup(payload).subscribe(res => {
      console.log('res', res);
      this.snackbarService.success('Successfully added');
      this.router.navigate(['groups'], {relativeTo: this.route.parent});
    }, (err: HttpErrorResponse) => {
      this.snackbarService.error(err);
    }).add(() => {
      this.spinner();
    });
  }

  updateGroup(): void {
    const payload: GroupModel = this.group;
    this.groupService.updateGroup(payload, this.groupId).subscribe(res => {
      this.snackbarService.success('Successfully updated');
      this.router.navigate(['groups'], {relativeTo: this.route.parent});
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
