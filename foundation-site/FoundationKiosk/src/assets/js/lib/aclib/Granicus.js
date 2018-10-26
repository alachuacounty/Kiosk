"use strict";

function getEvents() {
    var rsgranicus = function (events) { };
    fetch('https://secure.alachuacounty.us/KioskWebApi/api/Granicus?param=events&folderId=none', { method: "POST" })
        .then(function (response) { return response.json(); })["catch"](function (error) { return console.error('Error', error); });
    return rsgranicus;
}

export { getEvents }
