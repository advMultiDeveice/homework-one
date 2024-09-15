import {  } from "../model/model.js";


changeRoute = () => {
    let hashTag = window.location.hash;
    let pageID = hashtag.replace('#', '');

    loadPage(pageID);
}


initURLListener = () => { 
    $(window).on('hashcahnge', changeRoute);
    changeRoute;
}

$(document).ready(function () {
    loadPage("home");
})