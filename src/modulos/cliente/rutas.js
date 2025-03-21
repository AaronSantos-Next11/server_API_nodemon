const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
   res.send('Cliente API todo ok')
})

module.exports = router