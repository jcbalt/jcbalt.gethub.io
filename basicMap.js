console.log("basicMap.js loaded.");

// CPCC Coordinates: 35.2176665 N, 80.831473 W -> 35.2176665, -80.831473

let map = L.map("map", {
center: [35.2176665, -80.831473],
  zoom: 16
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([35.2176665, -80.831473], {
  title: "Hello from CPCC!"
}).bindPopup(`
<center>
<h2>Hello from CPCC</h2>
<hr>
<a href="https://www.cpcc.edu">Click here to visit CPCC's Website</a><br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/4tPYXA5o0b8?si=pHztJS4YYmS0qUp_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<hr>
<p>[URL: https://www.youtube.com/watch?v=4tPYXA5o0b8]</p> 
</center>
`)
  .addTo(map);
