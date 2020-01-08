import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApiService {

  url: string;

  constructor(
      private http: HttpClient,
      @Inject('env') private env: any
  ) {
      this.url = `${this.env.apiEndPoint}${this.env.apis.ticket}`;
  }

  public createTemplate(form) {

    return this.http.post(`${this.url}/template`, {
      templateName: form.name,
      templateDescription: form.description,
      templateJson: form
    });
  }
  /**
   * getAllUserTemplates
   */
  public getAllUserTemplates() {
    return this.http.get(`${this.url}/template`);
  }

/**
 * getAllAdminTemplates
 */
public getAllAdminTemplates() {
  return this.http.get(`${this.url}/template`);
}

  public getUserTemplate(templateId) {
    return this.http.get(`${this.url}/template/${templateId}`);
  }

  /**
   * createUserConfiguration
   */
  public createUserConfiguration(form) {
    return this.http.post(`${this.url}/configuration`,form);
  }

  /**
   * deleteTemplate
   */
  public deleteTemplate(templateId) {
    return this.http.delete(`${this.url}/template/${templateId}`);
  }

  /**
   * editTemplate
   */
  public editTemplate(form: any) {
    return this.http.patch(`${this.url}/template/${form.templateId}`,form);
  }
}
