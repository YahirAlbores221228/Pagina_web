import React, { useEffect, useRef } from "react";

function Maps({ x1, y1 }) {
  const mapRef = useRef(null);

  const x2 = [16.737581419808887];
  const y2 = [-93.16771884619332];
  const titles = ["Taqueria Sabor de México"];

  useEffect(() => {
    const loadMap = () => {
      const google = window.google;
      const mapNode = mapRef.current;
      const map = new google.maps.Map(mapNode, {
        center: { lat: x2[0], lng: y2[0] },
        zoom: 15,
        styles: [
          {
            "featureType": "all",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "weight": "2.00"
              }
            ]
          },
          {
            "featureType": "all",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#9c9c9c"
              }
            ]
          },
          {
            "featureType": "all",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
              {
                "color": "#f2f2f2"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
              {
                "saturation": -100
              },
              {
                "lightness": 45
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#7b7b7b"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "on"
              },
              {
                "color": "#c1e8e8"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#c1e8e8"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#070707"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          }
        ]
      });

      const markersData = [
        { position: { lat: x2[0], lng: y2[0] }, title: titles[0] },
      ];

      markersData.forEach(markerData => {
        new google.maps.Marker({
          position: markerData.position,
          map: map,
          title: markerData.title,
        });
      });
    };

    if (window.google && window.google.maps) {
      loadMap();
    } else {
      window.addEventListener('load', loadMap);
      return () => window.removeEventListener('load', loadMap);
    }
  }, [x1, y1]);

  return (
    <div className="h-auto py-20">
      <h1 className="text-yellow-500 text-3xl font-semibold text-center mb-10">UBICACION</h1>
      <div ref={mapRef} className="w-full h-96 sm:h-80 md:h-96 lg:h-96 xl:h-96 rounded shadow-lg"></div>
    </div>
  );
}

export default Maps;
