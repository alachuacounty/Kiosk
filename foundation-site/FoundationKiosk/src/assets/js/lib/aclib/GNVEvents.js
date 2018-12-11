"use strict"
//GNVEvents.js

function getGNVEvents(eventsGNV) {

    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    
    fetch(CORS_PROXY + 'https://www.visitgainesville.com/events/list/')

    .then((res) => {
        return res.text();
    })
    .then((data) => {
        
        //we already have jQuery loaded so why not use it here then...
        
        eventsGNV.innerHTML += $('#tribe-events-content', data).html();

        $('#tribe-events-header').remove();
        
        //console.log($('#tribe-events-content', data).html());
    })

    return eventsGNV;

}

export { getGNVEvents }