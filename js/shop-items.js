"use strict"

let requestURL = 'json/items.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();
let allItems;

request.onload = function() {
    let allItemsText = request.response;
        allItems = JSON.parse(allItemsText);
}

