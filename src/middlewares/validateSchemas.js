const Joi = require('joi');

const validateSchema = (schema, reqType) => {
    return (req, res, next) => {
        const options = {
            body: req.body,
            params: req.params,
            query: req.query
        }
        const validateData = options[reqType];
        const { error, value } = schema.validate(validateData);

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        // Attach the validated data to the request object
        req.validatedData = value;

        next();
    };
};

module.exports = validateSchema;