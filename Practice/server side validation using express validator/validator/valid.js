const { check } = require("express-validator");


exports.registration=[
check("name")
.trim()
.notEmpty()
.withMessage("name is empty")
.isLength({min:3})
.withMessage("minimum length is 3 cherecter")
.isLength({max:23})
.withMessage("maximum length is 23 cherecter"),

check("email")
.trim()
.notEmpty()
.withMessage("email is empty")
.isEmail()
.withMessage("email is not valid"),


check("password")
.trim()
.notEmpty()
.withMessage("password is empty")
.isLength({min:3})
.withMessage("password length at least in 3 digit")
.isLength({max:12})
.withMessage("maximum length of password is 12 digit"),


check("dateOfBirth")
.trim()
.notEmpty()
.withMessage("date is empty")
.isISO8601()
.toDate()
.withMessage("Year-Month-date"),
]


exports.signin=[
    

check("email")
.trim()
.notEmpty()
.withMessage("email is empty")
.isEmail()
.withMessage("email is not valid"),


check("password")
.trim()
.notEmpty()
.withMessage("password is empty")
.isLength({min:3})
.withMessage("password length at least in 3 digit")
.isLength({max:12})
.withMessage("maximum length of password is 12 digit"),

]


