import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from './button';
import { Input } from './input';
import { Card, CardContent, CardHeader, CardTitle } from './card';

interface MapProps {
  className?: string;
}

const Map = ({ className }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      projection: 'globe' as any,
      zoom: 2,
      center: [0, 20],
      pitch: 0,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add sample factory locations
    const factories = [
      { name: 'Shanghai Factory', coordinates: [121.4737, 31.2304], status: 'active' },
      { name: 'Detroit Plant', coordinates: [-83.0458, 42.3314], status: 'active' },
      { name: 'Mumbai Facility', coordinates: [72.8777, 19.0760], status: 'warning' },
      { name: 'Frankfurt Hub', coordinates: [8.6821, 50.1109], status: 'active' },
      { name: 'São Paulo Center', coordinates: [-46.6333, -23.5505], status: 'maintenance' }
    ];

    map.current.on('load', () => {
      // Add factory markers
      factories.forEach((factory) => {
        const color = factory.status === 'active' ? '#10b981' : 
                     factory.status === 'warning' ? '#f59e0b' : '#ef4444';
        
        const el = document.createElement('div');
        el.className = 'factory-marker';
        el.style.cssText = `
          width: 12px;
          height: 12px;
          background-color: ${color};
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          cursor: pointer;
        `;

        new mapboxgl.Marker(el)
          .setLngLat(factory.coordinates as [number, number])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                <div class="p-2">
                  <h3 class="font-semibold">${factory.name}</h3>
                  <p class="text-sm">Status: ${factory.status}</p>
                </div>
              `)
          )
          .addTo(map.current!);
      });

      // Add supply routes
      const routes = [
        [[121.4737, 31.2304], [-83.0458, 42.3314]], // Shanghai to Detroit
        [[72.8777, 19.0760], [8.6821, 50.1109]], // Mumbai to Frankfurt
        [[-46.6333, -23.5505], [-83.0458, 42.3314]] // São Paulo to Detroit
      ];

      routes.forEach((route, index) => {
        map.current!.addSource(`route-${index}`, {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: route
            }
          }
        });

        map.current!.addLayer({
          id: `route-${index}`,
          type: 'line',
          source: `route-${index}`,
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#3b82f6',
            'line-width': 2,
            'line-opacity': 0.7
          }
        });
      });
    });

    setShowTokenInput(false);
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  if (showTokenInput) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Mapbox Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Please enter your Mapbox public token to display the supply chain map.
            Get your token at{' '}
            <a 
              href="https://mapbox.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>
          </p>
          <Input
            type="text"
            placeholder="pk.eyJ1Ijoi..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleTokenSubmit()}
          />
          <Button 
            onClick={handleTokenSubmit}
            disabled={!mapboxToken.trim()}
            className="w-full"
          >
            Initialize Map
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={className}>
      <div ref={mapContainer} className="w-full h-full rounded-lg shadow-elegant" />
    </div>
  );
};

export default Map;