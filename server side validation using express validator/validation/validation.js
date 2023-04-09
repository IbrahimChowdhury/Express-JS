const { check,validationResult } = require("express-validator");

exports.runValidation =  
(req, res,next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let errorslist=errors.array().map((error)=>error.msg)
      return res.status(400).json({ errors: errorslist });
    }
    next()
}