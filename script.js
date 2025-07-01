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
  { name: 'Loc1-CollectiveKitchen', coords: [1330, 180], file: 'locations/Loc1-CollectiveKitchen.html' },
  { name: 'Loc1-PublicPantry', coords: [200, 900], file: 'locations/Loc1-PublicPantry.html' },
  { name: 'Loc1-DiningHall', coords: [1200,880], file: 'locations/Loc1-DiningHall.html' },
  { name: 'Loc1-MasterBedroom', coords: [650, 1800], file: 'locations/Loc1-MasterBedroom.html' },
  { name: 'Loc1-KidsRooms', coords: [870, 2340], file: 'locations/Loc1-KidsRooms.html' }
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
