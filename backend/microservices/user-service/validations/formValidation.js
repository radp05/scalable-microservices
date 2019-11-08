//import { createHashPassword } from "../helpers/userHelper";
const validateUserForm = (req, res, next) => {
  var forms = require("forms");
  var fields = forms.fields;
  var validators = forms.validators;

  var reg_form = forms.create({
    userName: fields.string({ required: true }),
    firstName: fields.string({ required: true }),
    lastName: fields.string({ required: true }),
    role: fields.string({ required: true }),
    groups: fields.string({ required: false }),
    password: fields.password({
      required: validators.required("You definitely want a password")
    }),
    confirm: fields.password({
      required: validators.required("don't you know your own password?"),
      validators: [validators.matchField("password")]
    }),
    email: fields.email()
  });

  reg_form.handle(req, {
    success: function(form) {
      // there is a request and the form is valid
      // form.data contains the submitted data
      req.isValid = true;
      req.form = form.data;
      console.log("there success");
    },
    error: function(form) {
      console.log("Erororroror", form);
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
  next();
};

export { validateUserForm };
