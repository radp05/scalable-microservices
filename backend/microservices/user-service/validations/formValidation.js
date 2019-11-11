var forms = require("forms");
var fields = forms.fields;
var validators = forms.validators;
const MESSAGES=require('../messages')
const validateUserForm = (req, res, next) => {
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
  next();
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
      req.isValid=false;
    },
    empty: function(form) {
      req.isValid = false;
    }
  });
  next();
};
export { validateUserForm, validateLoginForm };