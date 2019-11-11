const { check, validationResult } = require('express-validator');

exports.emailValidation = [
    check('email')
        .not().isEmpty()
        .isEmail()
        .normalizeEmail(),
];

