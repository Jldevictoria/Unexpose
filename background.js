// Name:	background.js
// Author:	Joseph DeVictoria.
// Date:	12/1/2015.
// Purpose:	background script used for browser functions.

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if ( request.message === "unexpose_switch_icon" ) {
			chrome.browserAction.setIcon({
				path: request.img,
				tabId: sender.tab.id
			});
		}
	}
);