/**
 * @author Marc Lipscke (marc.lipscke@googlemail.com)
 */

var monitor,url; 
function chkstat() { 
		url = new air.URLRequest('http://www.maso.macht-freude.de');
        monitor = new air.URLMonitor(url); 
        monitor.addEventListener(air.StatusEvent.STATUS, announceStatus = function(e) {
        	if(monitor.available) {
        		$('status').src="online.png";
        	} else {
        		$('status').src="offline.png";
        	}
        }); 
        monitor.start(); 
} 

function $(node) {
	return document.getElementById(node);
}
