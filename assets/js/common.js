const logo = chrome.runtime.getURL("assets/imgs/logo.png");
const robot = chrome.runtime.getURL("assets/icons/robot.svg");
const logo_send = chrome.runtime.getURL("assets/icons/send.svg");
const logo_send_active = chrome.runtime.getURL("assets/icons/send_active.svg");

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        var obj = {
            top: elmnt.style.top,
            left: elmnt.style.left
        }
        chrome.storage.local.set({pos: JSON.stringify(obj)}, function() {
            console.log('Value is set to ' + JSON.stringify(obj));
        });
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}