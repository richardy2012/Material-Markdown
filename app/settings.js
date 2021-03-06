var remote = require('remote');
var BrowswerWindow = remote.require('browser-window');
var fs = require('fs');
// Window Buttons
var settingsClose = document.querySelector('#settings-close');
var settingsMinimize = document.querySelector('#settings-minimize');
var settingsFullscreen = document.querySelector('#settings-fullscreen');
// App scope & app settings
var settings = document.getElementsByTagName('app-settings')[0];

// window.addEventListener('WebComponentsReady', function(){
//   // Read settings and load these settings into the settings window
//   settings.readSettings();
// });

// Managing closing etc of the settings window

settingsClose.addEventListener('click', function(){

  var newSettings = settings.returnModifiedSettings();
  fs.writeFileSync(__dirname + '/settings.json', JSON.stringify(newSettings, null, 2));
  // Settings window
  var settingsWindow = BrowswerWindow.getFocusedWindow();
  settingsWindow.close();
},false);

settingsMinimize.addEventListener('click', function(){
  // Settings window
  var settingsWindow = BrowswerWindow.getFocusedWindow();
  settingsWindow.minimize();
},false);

settingsFullscreen.addEventListener('click', function(){
  // Settings window
  var settingsWindow = BrowswerWindow.getFocusedWindow();
  settingsWindow.setFullScreen(!settingsWindow.isFullScreen());
},false);
