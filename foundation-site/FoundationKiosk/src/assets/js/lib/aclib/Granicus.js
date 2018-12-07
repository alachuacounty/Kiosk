"use strict";
// Granicus.js
function getEvents(events) {

    fetch('https://secure.alachuacounty.us/KioskWebApi/api/Granicus?param=events&folderId=none', { method: "POST" })
    .then((response) => { return response.json(); })
    .then((json) => { 
        
        events = json;
        
        events = JSON.parse(events);

        $.each(events, (evidx, ev) => { $("#events").append("<ul>" + ( evidx + 1) + ": " + ev._Name + "</ul>") }); 

    })
    ["catch"]((error) => { return console.error('Error', error); });

    return events;
}

export { getEvents }
