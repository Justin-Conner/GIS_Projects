
  // GeoJSON data

    // Fetch GeoJSON data
    fetch('GeoData.json')
    .then(response => response.json())
    .then(data => {
      geojsonData = data;  // Assign fetched data to the variable
      initMap();  // Call initMap after fetching data
    })
    .catch(error => console.error('Error fetching GeoJSON data:', error));

  /* Your GeoJSON data here */

  function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 38.6633, lng: -90.6667 }, // Center the map around Chesterfield, Missouri
      zoom: 10,  // Adjust the initial zoom level as needed
    });

    // Loop through GeoJSON features and add markers/polygon to the map
    geojsonData.features.forEach(feature => {
      if (feature.geometry.type === 'Point') {
        // Marker for cities
        const marker = new google.maps.Marker({
          position: { lat: feature.geometry.coordinates[1], lng: feature.geometry.coordinates[0] },
          map: map,
          title: feature.properties.name,
        });

        // Add an info window with population information
        const infoWindow = new google.maps.InfoWindow({
          content: `<div>${feature.properties.name}<br>Population: ${feature.properties.population}</div>`,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      } else if (feature.geometry.type === 'Polygon') {
        // Polygon for the park
        const polygon = new google.maps.Polygon({
          paths: feature.geometry.coordinates[0].map(coords => ({ lat: coords[1], lng: coords[0] })),
          map: map,
          fillColor: 'rgba(0, 255, 0, 0.5)',  // Adjust polygon color and opacity
          strokeWeight: 2,  // Adjust polygon border width 
        });

        // Add an info window for the park
        const infoWindow = new google.maps.InfoWindow({
          content: `<div>${feature.properties.name}<br>Area: ${feature.properties.area} acres</div>`,
        });

        polygon.addListener('click', (event) => {
          infoWindow.setPosition(event.latLng);
          infoWindow.open(map);
        });
      }
    });
  }

