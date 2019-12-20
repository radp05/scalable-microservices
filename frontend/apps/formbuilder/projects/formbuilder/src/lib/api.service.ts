import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(public http: HttpClient) {}

  public createTemplate(form) {

    console.log("form",form);
    
    return this.http.post("http://localhost:3004/api/v1/form/template", {
      templateName: form.name,
      templateDescription: form.description,
      templateJson: form
    });
  }
  /**
   * getAllUserTemplates
   */
  public getAllUserTemplates() {
    return this.http.get("http://localhost:3004/api/v1/form/template");
  }

/**
 * getAllAdminTemplates
 */
public getAllAdminTemplates() {
  return this.http.get("http://localhost:3004/api/v1/form/template");
}

  public getUserTemplate(templateId) {
    return this.http.get(`http://localhost:3004/api/v1/form/template/${templateId}`);
  }

  /**
   * createUserConfiguration
   */
  public createUserConfiguration(form) {
    return this.http.post("http://localhost:3004/api/v1/form/configuration",form);
  }

  /**
   * deleteTemplate
   */
  public deleteTemplate(templateId) {
    return this.http.delete(`http://localhost:3004/api/v1/form/template/${templateId}`);
  }

  /**
   * editTemplate
   */
  public editTemplate(form :any) {
    return this.http.patch(`http://localhost:3004/api/v1/form/template/${form.templateId}`,form);
  }
}
