// const express = require('express')
// const router = express.Router()
// const turbo = require('turbo360')({ site_id: process.env.TURBO_APP_ID })

// const controllers = require('../controllers')

// router.get('/:resource', (req, res) => {
//   const resource = req.params.resource;
//   const controller = controllers[resource];

//   if (controller == null) {
//     res.json({
//       confirmation: 'fail',
//       message: 'Invalid Resource.'
//     })
//     return
//   }
//   // else
//   controller.get()
//     .then(data => {
//       res.json({
//         confirmation: 'success',
//         data: data
//       })
//     })
//     .catch(err => {
//       res.json({
//         confirmation: 'fail',
//         data: err.message
//       })
//     })


// })

// module.exports = router
