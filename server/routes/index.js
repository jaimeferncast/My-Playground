module.exports = app => {

    // Base URLS
    app.use('/api/phones', require('./base.routes.js'))
}