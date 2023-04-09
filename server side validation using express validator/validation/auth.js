const { check } = require("express-validator");

exports.registrationValidator=[
    check("name")
    .trim()
    .notEmpty()
    .withMessage("the index is empty")
    .isLength({min:3})
    .withMessage("minimum length is 3")
    .isLength({max:23})
    .withMessage("the maximumlength for name is 23"),
    check("email")
    .trim()
    .notEmpty()
    .withMessage("email is empty")
    .isEmail()
    .withMessage("this is not a valid email")
    ,
    
    check("password")
    .trim()
    .notEmpty()
    .withMessage("age is empty")
    .isLength({min:3})
    .withMessage("length must be atleast 1 digit")
    .isLength({max:8})
    .withMessage("maximum length is 3")
    ,
    
    check("dateOfBirth")
    .trim()
    .notEmpty()
    .isISO8601()
    .toDate()
    .withMessage("not a valid dateOfBirth")
    ,
]


exports.signinvalidation=[
    
check("email")
.trim()
.notEmpty()
.withMessage("email is empty")
.isEmail()
.withMessage("this is not a valid email")
,

check("password")
.trim()
.notEmpty()
.withMessage("age is empty")
.isLength({min:3})
.withMessage("length must be atleast 1 digit")
.isLength({max:8})
.withMessage("maximum length is 8")
,
]