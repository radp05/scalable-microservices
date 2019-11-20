import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { SnackbarService } from '../../../services/snackbar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { GroupService } from '../../groups/group.service';
import { emailPattern } from './regex-pattern';

@Component({
  selector: 'lib-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  btnLabel: string = 'Submit';
  formLabel: string = 'Add User';
  userId: string;
  user: UserModel = {
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    groupId: ''
  };
  beginProcess: boolean = false;
  isViewForm: boolean = false;
  groupList: any[];
  patternEmail: RegExp = emailPattern;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private groupService: GroupService
  ) {
    this.initResourceList();
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.userId = this.route.snapshot.paramMap.get('id');
      const url = this.router.url;
      if (url.includes('view')) {
        this.isViewForm = true;
        this.formLabel = 'View User';
      } else {
        this.btnLabel = 'Update'
        this.formLabel = 'Edit User';
      }
      this.initFormOnUpdate();
    }
  }

  initResourceList(): void {
    this.groupService.getAllGroups().subscribe(res => {
      this.groupList = res.data;
    }, err => {
      this.snackbarService.error(err);
    });
  }

  initFormOnUpdate(): void {
    this.spinner();
    this.userService.getOneUser(this.userId).subscribe(res => {
      const data = res.data;
      this.user = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        userName: data.userName,
        groupId: data.groupId
      };
      console.log('???user', this.user);
    }, err => {
      this.snackbarService.error(err);
    }).add(() => {
      this.spinner();
    })
  }

  onClickUserBtn(): void {
    if (this.userId) {
      // Update user service
      this.updateUser();
    } else {
      // Add user service
      this.addUser();
    }
  }

  addUser(): void {
    this.spinner();
    const payload: UserModel = this.user;
    this.userService.addUser(payload).subscribe(res => {
      console.log('res', res);
      this.snackbarService.success('Successfully added');
      this.router.navigate(['/admin/users']);
    }, (err: HttpErrorResponse) => {
      this.snackbarService.error(err);
    }).add(() => {
      this.spinner();
    });
  }

  updateUser(): void {
    const payload: UserModel = this.user;
    this.userService.updateUser(payload, this.userId).subscribe(res => {
      this.snackbarService.success('Successfully updated');
      this.router.navigate(['/admin/users']);
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
