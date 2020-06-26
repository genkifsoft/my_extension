'use strict';

document.getElementById('colors').addEventListener('change', function(tabs) {
    chrome.tabs.executeScript({code: 'document.body.style.backgroundColor = "' + this.value + '"'});
});