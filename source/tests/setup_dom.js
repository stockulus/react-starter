import jsdom from 'jsdom'

export default (callback) => {
  jsdom.env(
    '<!doctype html><html><body></body></html>',
    (error, window) => {
      if (error) return callback(error)
      global.window = window
      global.document = window.document
      callback()
    }
  )
}
