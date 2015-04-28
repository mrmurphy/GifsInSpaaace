var menubar = require('menubar')
var globalShortcut = require('global-shortcut')
var clipboard = require('clipboard')
var axios = require('axios')

var ICON_PATH = process.cwd() + '/images/status_icon.png'
var API = 'http://gifs.murphyrandle.com'

var mb = menubar(
  {
    icon: ICON_PATH,
    height: 60,
    width: 250
  }
)

function bootstrapShortcut() {
  // Register a 'ctrl+x' shortcut listener.
  var ret = globalShortcut.register('ctrl+shift+g', linkToClipboard.bind(null, 'foo foo foo'))
  if (!ret) console.log('shortcut registration failed')
}

function linkToClipboard(url) {
  axios.get(API + '/images/head')
  .then(function(res) {
    var id = res.data.id
    clipboard.writeText('![A gif!](' + API + '/images/' + id + ')')
  })
}

mb.on('ready', function ready () {
  bootstrapShortcut()
})
