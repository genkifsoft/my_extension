// If you want to sendMessage from any popup or content script,
// use `chrome.runtime.sendMessage()`.

// Send message to background:
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
	console.log(`message from background: ${JSON.stringify(response)}`);
});