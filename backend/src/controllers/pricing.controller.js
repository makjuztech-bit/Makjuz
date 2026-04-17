const { pricing } = require('../data/siteContent')

async function getPricing(_req, res) {
  res.json({
    success: true,
    data: pricing,
    message: 'Pricing data is available for future parity-safe expansion.',
  })
}

module.exports = { getPricing }
