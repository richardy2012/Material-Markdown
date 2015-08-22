'use strict';

var fs = require('fs');
var editor = document.getElementsByTagName('markdown-editor')[0];
var iconSwitch = document.getElementsByTagName('icon-button-switch')[0];

// Watch for change to settings.json file (when settings are saved)

fs.watch(__dirname + '/settings.json', function () {
  var appSettings = require('./settings.json');
  var general = appSettings.general;
  var editorSettings = appSettings.editor;

  // General

  editor.autorender = general.autorendering;
  editor.wordCount = general.showWordCount;

  // Editor
  editor.wrap = editorSettings.codeFolding;

  //line numbers change goes here

  //TODO: Add settings to these

  // var markdown = appSettings.markdown;
  //
  // var theming = appSettings.theming;
  //
  // var outputStyles = appSettings.outputStyles;

});

// Settings to change on next start
window.addEventListener('WebComponentsReady', function(){
  // Checking General Settings:
  var appSettings = require('./settings.json');
  var general = appSettings.general;

  if (general.showRibbonOnStart === true){
    editor.noribbon = false;
    iconSwitch.icons =  'close menu';
  }
});
