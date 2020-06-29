chrome.runtime.sendMessage({todo: "showAction"});

chrome.runtime.onMessage.addListener(function(request, seder, sendResponse) {
    if (request.todo == 'select_box') {
        let footer = document.querySelector('footer').innerText;
        let select_box_company = request.company_name;

        if (footer == select_box_company) {
            sendResponse('Company name valid');
        } else {
            sendResponse('Company name invalid');
        }

        return true;
    }
});