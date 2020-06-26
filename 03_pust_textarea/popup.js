'use strict';

chrome.tabs.query({}, function(tabs) {
    var i;
    var title = [];
    var results = document.getElementById('result');
    for(i = 0; i <tabs.length; i++) {
        title.push(tabs[i].title);
    }
    results.value = title.join("\n");
    console.log(results);
    
    results.select();
});