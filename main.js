'use strict'

const electron = require('electron');
const { app, BrowserWindow } = require('electron');
require('electron-reload')(__dirname);

function createWindow(){
    let win = new BrowserWindow({ width: 800, height: 600 });

    win.loadFile('index.html');
}

app.on('ready', createWindow);