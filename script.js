const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const mapWidth = 3000; // Replace with your actual map size
const mapHeight = 2000;
const bounds = [[0,0], [mapHeight, mapWidth]];
const image = L.imageOverlay('map/your-map.jpg', bounds).addTo(map);

map.fitBounds(bounds);

const locations = [
  { name: 'Loc1-MountainRidgeOfTheNomads', coords: [700, 1500], file: 'locations/Loc1-MountainRidgeOfTheNomads.html' },
  { name: 'Loc1-EverGrowingIvy', coords: [1357, 1690], file: 'locations/Loc1-EverGrowingIvy.html' },
  { name: 'Loc1-LesbianVolcano', coords: [895, 845], file: 'locations/Loc1-LesbianVolcano.html' },
  { name: 'Loc1-SplitVillage', coords: [1910, 550], file: 'locations/Loc1-SplitVillage.html' },
  { name: 'Loc1-TentofTrinkets', coords: [1090, 460], file: 'locations/Loc1-TentofTrinkets.html' }
];

locations.forEach(loc => {
  const marker = L.marker(loc.coords).addTo(map);
  marker.on('click', () => openPopup(loc.file));
});

function openPopup(file) {
  document.getElementById('popupFrame').src = file;
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('popupFrame').src = '';
}
