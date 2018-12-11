"use strict"
//GNVEvents.js

function getGNVEvents() {

    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    
    fetch(CORS_PROXY + 'https://www.visitgainesville.com/events/list/')
    
    .then((res) => {
        return res.text();
    })
    .then((data) => {
        
        $('#local-events-container').append($('#tribe-events-content', data).html());

        $('#tribe-events-header').remove();
        
        console.log($('#tribe-events-content', data).html());
    })

}

export { getGNVEvents }