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

let templateProductItem = document.getElementById('templateProductItem').innerHTML,
    compiled = _.template(templateProductItem),
    html = '';

function getDataForProductItemTemplate(allItems) {
    return {
        id: allItems.id,
        price: allItems.title,
        name: allItems.description,
        img: allItems.available
    }
}
$('#allItemsText').append(html);

allItems.forEach(function(item) {
    let data = {
        id: product.id,
        title: product.title,
        description: product.description,
        available: product.available,
        rating: product.rating
    }
    html += compiled(data);
});
