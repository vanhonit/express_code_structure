function notFound (req, res) {
  res.status(404).json({error: 'The endpoint not found', code: 404})
}

module.exports = notFound
