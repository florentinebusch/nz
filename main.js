/*
Script für die Neuseelandreise
*/

let lat = -45.317222;
let lng = 166.988333;
let zoom = 11;

// Karte initialisieren
let map = L.map('map').setView([lat, lng], zoom);

// Hintergrundfarbe definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Marker zeichnen
let marker = L.marker([-45.317222, 166.988333]).addTo(map);

// Popup definieren und öffnen
marker.bindPopup(`
            <b>Hello world!</b>
            <br>
            I am a popup at ${lat.toFixed(5)} / ${lng.toFixed(5)}.
        `).openPopup();

// Groß schreiben nur für Konstanten!