// ==UserScript==
// @name         Bsky kawaii
// @namespace    https://astralvrz.github.io/
// @version      2024-05-02
// @description  Auto Bluesky kawaii mode 🪷🌸
// @author       Astral
// @match        https://bsky.app/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bsky.app
// @grant        none
// ==/UserScript==

(function() {
    var URL = "https://bsky.app/?kawaii=true"
    if (location.href == URL) {
        new Audio('https://file.garden/ZfoWoAeKR2HIs_IK/America%20Ya%20D.mp3').play()
    } 
    else {location.replace(URL)}
})();
