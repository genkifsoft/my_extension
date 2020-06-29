$(function() {

    $("#select_box").append('<option value=1>My option</option>');

    $('#select_box').on('change', function() {
        let self = this;
        
        chrome.tabs.query({active:true, currentWindow: true}, function(tabs) {
             chrome.tabs.sendMessage(tabs[0].id, {todo: 'select_box', company_name: self.value}, function(res) {
                var opt = {
                    type: "basic",
                    title: "Primary Title",
                    iconUrl: "images/icon.png"
                }
                opt.message = res;
                chrome.notifications.create('limit21', opt);
            });
           
            return true;
        });
    });
});