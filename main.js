/*
Script für die Neuseelandreise
*/


let stop = {
    nr: 20,
    title: "Doubtful Sound",
    user: "florentinebusch",
    lat: -45.317222,
    lng: 166.988333,
    zoom: 11,
};

// Karte initialisieren
let map = L.map('map').setView([stop.lat, stop.lng], stop.zoom);

// Hintergrundfarbe definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Marker zeichnen
let marker = L.marker([stop.lat, stop.lng]).addTo(map);

// Popup definieren und öffnen
marker.bindPopup(`
            <h2>Doubtful Sound</h2>
             <ul> 
                <li>Geographische Breite ${stop.lat.toFixed(5)}°</li>
                <li>Geographische Länge ${stop.lng.toFixed(5)}°</li>
            </ul>
        `).openPopup();



// Groß schreiben nur für Konstanten!