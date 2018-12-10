"use strict";
// Granicus.js

function getEvents(events) {

    fetch('https://secure.alachuacounty.us/KioskWebApi/api/Granicus?param=events&folderId=none', { method: "POST" })
    .then((response) => { return response.json(); })
    .then((json) => { 
        
        events = json;
        
        //Events are returned normally latest to newest so they must be reversed
        events = JSON.parse(events).reverse();

        let evtBox = document.querySelector("#granicus-events");

        events.forEach( ev => {

            var evDate = new Date(0);

            evDate.setUTCSeconds(ev._StartTime.replace("/Date(", "").replace("-0500)/", "").replace("-0400)/", "") / 1000);
            
            //@ symbol is replaced with just a space 
            if(ev._Name.indexOf("@") != -1)
                ev._Name = ev._Name.replace(`@${ev._Name.substring(ev._Name.indexOf("@")+1)}`, " ");

            //if there is a live event produce a link to go directly to the meeting-- most likely this will need to be changed...
            if (ev._Status === "Running") {
            
                evtBox.innerHTML += `${ev._Name.replace("/", " ")} ${evDate.toLocaleString().replace(/:\d{2}\s/, ' ')}`;

                evtBox.innerHTML += `<ul><a href='http://alachua.granicus.com/MediaPlayer.php?view_id=8&event_id=${ev._ID}'>${ev._Name}</a></ul>`;            
            }
            else {

                evtBox.innerHTML += `<ul>${ev._Name.replace("/", " ")} ${evDate.toLocaleString().replace(/:\d{2}\s/, ' ')}</ul>`;
            }
            
        });
        
    })
    ["catch"]((error) => { return console.error('Error', error); });

    return events;
}

export { getEvents }
