import { Component, OnInit } from '@angular/core';
import { GroupModel } from '../group.model';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupService } from '../group.service';
import { SnackbarService } from '../../../services/snackbar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
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
    private snackbarService: SnackbarService
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
    this.resourceList = [
      { id: 1, name: 'Devices' },
      { id: 2, name: 'Orders' },
      { id: 3, name: 'Admin' }
    ];
  }

  initFormOnUpdate(): void {
    this.group.groupName = 'Testing';
    this.group.resourceIds = [1, 2]; // Pass resource ids here
    // this.spinner();
    // this.groupService.getOneGroup(this.groupId).subscribe(res => {
    //   const data = res.data;
    //   this.group = {
    //     groupId: data.groupId,
    //     groupName: data.groupName,
    //     resourceIds: data.resourceIds
    //   };
    // }, err => {
    //   this.snackbarService.error(err);
    // }).add(() => {
    //   this.spinner();
    // })
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
    console.log('???group', this.group);
    // this.spinner();
    // const payload: GroupModel = this.group;
    // this.groupService.addGroup(payload).subscribe(res => {
    //   console.log('res', res);
    //   this.snackbarService.success('Successfully added');
    //   this.router.navigate(['/admin/groups']);
    // }, (err: HttpErrorResponse) => {
    //   this.snackbarService.error(err);
    // }).add(() => {
    //   this.spinner();
    // });
  }

  updateGroup(): void {
    const payload: GroupModel = this.group;
    console.log('???payload', payload);
    this.groupService.updateGroup(payload).subscribe(res => {
      this.snackbarService.success('Successfully updated');
      this.router.navigate(['/admin/groups']);
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
