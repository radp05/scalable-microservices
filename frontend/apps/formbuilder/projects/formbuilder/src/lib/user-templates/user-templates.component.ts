import { Inject,Component, OnInit, Optional } from "@angular/core";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { ApiService } from "../api.service";
import swal from "sweetalert2";
import { field, value } from "../global.model";
import { MatSnackBar } from '@angular/material';

@Component({
  selector: "app-user-templates",
  templateUrl: "./user-templates.component.html",
  styleUrls: ["./user-templates.component.scss"]
})
export class UserTemplatesComponent implements OnInit {
  templates = [];
  selectedTemp: string;
  addUsersForm: FormGroup;
  template: FormGroup;
  attributes: any;
  isEdit:boolean=false;
  modelFields: Array<field> = [];
  model: any = {
    name: "Template Name",
    description: "Template Description...",
    theme: {
      bgColor: "ffffff",
      textColor: "555555",
      bannerImage: ""
    },
    attributes: this.modelFields
  };

  selectedTemplate = new FormControl("", [Validators.required]);
 



  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any,fb: FormBuilder, private apiService: ApiService,public _snackBar:MatSnackBar) {
  
      if(this.data){
        this.isEdit=true
        this.attributes=this.data.attributes;
      }
    this.selectedTemp = "";
    this.template = new FormGroup({
      selectedTemplate: new FormControl(
        "",
        Validators.compose([Validators.required])
      )
    });
  }
  ngOnInit() {
    this.selectedTemp = "";
    this.apiService.getAllUserTemplates().subscribe((results: any) => {
      this.templates = results.data;
    });
  }

  /**
   * getUserTemplates
   */
  public getUserTemplate(selectedTemplate: any) {
    this.apiService
      .getUserTemplate(selectedTemplate.templateId)
      .subscribe((results: any) => {
        this.selectedTemp = results;
        this.attributes = results.data.templateJson.attributes;
        console.log("response::data", this.attributes);
      });
  }

  /**
   * submiUserConfigurations
   */
  public submiUserConfigurations(data) {
    let valid = true;
    let validationArray = JSON.parse(JSON.stringify(this.model.attributes));
    validationArray.reverse().forEach(field => {
      console.log(field.label + "=>" + field.required + "=>" + field.value);
      if (field.required && !field.value && field.type != "checkbox") {
        swal("Error", "Please enter " + field.label, "error");
        valid = false;
        return false;
      }
      if (field.required && field.regex) {
        let regex = new RegExp(field.regex);
        if (regex.test(field.value) == false) {
          swal("Error", field.errorText, "error");
          valid = false;
          return false;
        }
      }
      if (field.required && field.type == "checkbox") {
        if (field.values.filter(r => r.selected).length == 0) {
          swal("Error", "Please enterrr " + field.label, "error");
          valid = false;
          return false;
        }
      }
    });
    if (!valid) {
      return false;
    }
    let input = new FormData();
    input.append("formId", this.model._id);
    input.append("attributes", JSON.stringify(this.model.attributes));
 
    var object = {};
    for (let i = 0; i < data.length; i++) {
      object[data[i].type] = data[i].value;
    }
    this.apiService
      .createUserConfiguration(object)
      .subscribe((results: any) => {
        console.log("done!!!!!!!");
        this.openSnackBar("Configuration has been successfully created.", "snackbar-success");
        this.attributes=[];
        this.ngOnInit();
      });
  }

  toggleValue(item) {
    item.selected = !item.selected;
  }

  public openSnackBar(message: string, cssClass: string) {
    this._snackBar.open(message, "", {
      duration: 2000,
      horizontalPosition: "center",
      panelClass: [cssClass, "snackbar-common-action"],
      verticalPosition: "top"
    });
  }

}
