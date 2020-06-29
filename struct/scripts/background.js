chrome.runtime.onMessage.addListener(function(request, sender, response) {
    if (request.todo == 'showAction') {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.pageAction.show(tabs[0].id);
        });
    }
    
    // if (request.todo == 'show_popup') {
    //     var opt = {
    //         type: "basic",
    //         title: "Primary Title",
    //         message: "Primary message to display",
    //         iconUrl: "images/icon.png"
    //     }
    //     chrome.notifications.create('limit', opt);
    // }
});

