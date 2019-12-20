import { ViewChild,Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSnackBar, MatDialog } from '@angular/material';
import {  Router } from '@angular/router';
import { UserTemplatesComponent } from '../user-templates/user-templates.component';
import { EditAppComponent } from '../edit-app/edit-app.component';

export interface PeriodicElement {
  name: string;
  description: string;
  attributes: number;
  status: boolean;
}


@Component({
  selector: 'app-admin-templates',
  templateUrl: './admin-templates.component.html',
  styleUrls: ['./admin-templates.component.scss']
})
export class AdminTemplatesComponent implements OnInit {
  templates:any;
  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['name', 'attributes', 'status', 'description','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA)
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public dialog: MatDialog,private router: Router,public apiService:ApiService,public _snackBar:MatSnackBar) { }

  ngOnInit() {
    this.getAllAdminTemplates();
  }


  /**
   * getAllAdminTemplates
   */
  public getAllAdminTemplates() {
    
    this.apiService.getAllAdminTemplates().subscribe((res:any)=>{
      this.ELEMENT_DATA=res.data.map((attr)=>{
        let obj={};
        obj=attr.templateJson;
        obj['status']=attr.status;
        obj['templateId']=attr.templateId;
        return obj;
      });

      this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  
      this.dataSource.paginator = this.paginator;
    })
  }

  public openSnackBar(message: string, cssClass: string) {
    this._snackBar.open(message, "", {
      duration: 2000,
      horizontalPosition: "center",
      panelClass: [cssClass, "snackbar-common-action"],
      verticalPosition: "top"
    });
  }

  /**
   * deleteTemplate()
   */
  public deleteTemplate(element) {
    
    this.apiService.deleteTemplate(element.templateId).subscribe((res)=>{
      console.log("Done!!!!");
      
      this.openSnackBar("Template has been successfully deleted.", "snackbar-failed");
      this.ngOnInit();
    })
  }

  /**
   * editTemplate
   */
  // public editTemplate(element) {
    

    // this.apiService.editTemplate(element).subscribe((res)=>{
    //   console.log("Done!!!!");
      
    //   this.openSnackBar("Template has been successfully updated.", "snackbar-success");
    //   this.ngOnInit();
    // })  
  // }

  public editTemplate(element) {
    console.log("element",element)
    const dialogRef = this.dialog.open(EditAppComponent,{
      data:element,
      autoFocus: false,
      maxHeight: '90vh' //you can adjust the value as per your view
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  /**
   * navigateAddTemp
   */
  public navigateAddTemp() {
    this.router.navigate(['admin-templates/add'])
  }
}



