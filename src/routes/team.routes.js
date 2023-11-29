const { Router } = require('express');
const router = Router();


router.post('/', (req, res) => {
    const { body } = req;
    console.log(req);
    res.send({ body });
});

module.exports = router;