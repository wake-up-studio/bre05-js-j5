// let lastP = document.querySelector("body p:last-child")
let body = document.querySelector("body")
let lorem = document.createTextNode("Lorem Ipsum")
let a = document.createElement("a")

a.appendChild(lorem)
a.setAttribute("href", "https://fr.wikipedia.org/wiki/Lorem_ipsum")
a.setAttribute("target", "_blank")

body.appendChild(a)
