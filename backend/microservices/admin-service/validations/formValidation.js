var forms = require("forms");
var fields = forms.fields;
var validators = forms.validators;

const MESSAGES = require("../messages");
import { getGroupById } from "../services/modelService";

const validateUserForm = (req, res, next) => {
  var reg_form = forms.create({
    userName: fields.string({ required: true }),
    firstName: fields.string({ required: true }),
    lastName: fields.string({ required: true }),
    role: fields.string({ required: false }),
    groupId: fields.string({ required: false }),
    /**
        password: fields.password({
      required: validators.required("You definitely want a password")
    }),
    confirm: fields.password({
      required: validators.required("don't you know your own password?"),
      validators: [validators.matchField("password")]
    }),
     */
    email: fields.email()
  });

  reg_form.handle(req, {
    success: async function(form) {
      let isValid = true;
      // there is a request and the form is valid
      // form.data contains the submitted data
      if (form.data.groupId) {
        let group = await getGroupById(form.data.groupId);        
        isValid = group ? true : false;        
      }
      req.isValid = isValid;
      req.form = form.data;
      next();
    },
    error: function(form) {
      req.isValid = false;
      // the data in the request didn't validate,
      // calling form.toHTML() again will render the error messages
    },
    empty: function(form) {
      req.isValid = false;
      console.log("there empty");
      // there was no form data in the request
    }
  });
};

const validateLoginForm = async (req, res, next) => {
  var login_form = forms.create({
    email: fields.email(),
    password: fields.string({ required: true })
  });

  login_form.handle(req, {
    success: function(form) {
      req.isValid = true;
      req.form = form.data;
    },
    error: function(form) {
      req.isValid = false;
    },
    empty: function(form) {
      req.isValid = false;
    }
  });
  next();
};

const validateGroupForm = (req, res, next) => {
  var addGroup_form = forms.create({
    groupName: fields.string({ required: true }),
    groupDescription: fields.string({ required: true })
  });

  addGroup_form.handle(req, {
    success: function(form) {
      // there is a request and the form is valid
      // form.data contains the submitted data
      req.isValid = true;
      req.form = form.data;
    },
    error: function(form) {
      req.isValid = false;
      // the data in the request didn't validate,
      // calling form.toHTML() again will render the error messages
    },
    empty: function(form) {
      req.isValid = false;
      // there was no form data in the request
    }
  });
  next();
};

export { validateUserForm, validateLoginForm, validateGroupForm };
