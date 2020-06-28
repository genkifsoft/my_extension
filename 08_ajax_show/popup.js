$(document).ready(function() {
    $('#userinput').change(function() {
        let userinput = $(this).val();
        console.log(userinput);
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            console.log('tab'+JSON.stringify(tabs));
            
            let msg = {
                txt: userinput
            };
            chrome.tabs.sendMessage(tabs[0].id, msg);
        });
    })
});