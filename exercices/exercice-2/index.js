let ol = document.querySelector("ol")
let body = document.querySelector("body")
let li = document.createElement("li")
let four = document.createTextNode("Préchauffer le four")
let firstLi = document.querySelector("ol li:first-child")

li.appendChild(four)

ol.insertBefore(li, firstLi)