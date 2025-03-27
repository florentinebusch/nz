/*
Script für die Neuseelandreise
*/

// Karte initialisieren
var map = L.map('map').setView([-45.317222, 166.988333], 11);

// Hintergrundfarbe definieren
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

// Marker zeichnen
        var marker = L.marker([-45.317222, 166.988333]).addTo(map);

// Popup definieren und öffnen
        marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

        