import L from 'leaflet';
import { Fragment, useEffect } from 'react';
import {
  Circle,
  CircleMarker,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  useMap,
} from 'react-leaflet';

const tileVariants = {
  default: {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  },
  dark: {
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  },
};

function FitToPoints({ points, padding = 48, maxZoom = 10 }) {
  const map = useMap();

  useEffect(() => {
    if (!points || points.length === 0) return;
    const bounds = L.latLngBounds(points.map((point) => [point.lat, point.lng]));
    map.fitBounds(bounds, { padding: [padding, padding], maxZoom });
  }, [map, points, padding, maxZoom]);

  return null;
}

export default function LeafletMap({
  center,
  zoom = 13,
  markers = [],
  cities = [],
  height = 420,
  className = '',
  scrollWheelZoom = false,
  tile = 'default',
  fitToCities = false,
}) {
  const fallback = markers[0] || cities[0];
  const mapCenter =
    center || (fallback ? [fallback.lat, fallback.lng] : [-23.398, -51.905]);
  const { url, attribution } = tileVariants[tile] ?? tileVariants.default;

  return (
    <div
      className={`relative z-0 overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-2xl shadow-black/20 ${className}`}
      style={{ height }}
    >
      <MapContainer
        center={mapCenter}
        zoom={zoom}
        scrollWheelZoom={scrollWheelZoom}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer attribution={attribution} url={url} />

        {fitToCities && cities.length > 0 && <FitToPoints points={cities} />}

        {markers.map((marker) => {
          const position = [marker.lat, marker.lng];
          return (
            <Fragment key={marker.id || `${marker.lat}-${marker.lng}`}>
              {marker.radiusKm ? (
                <Circle
                  center={position}
                  radius={marker.radiusKm * 1000}
                  pathOptions={{ color: '#ee7020', fillColor: '#ee7020', fillOpacity: 0.12 }}
                />
              ) : null}
              <Marker position={position}>
                {(marker.title || marker.popup) && (
                  <Popup>
                    {marker.title && <strong>{marker.title}</strong>}
                    {marker.popup && <p style={{ margin: '0.25rem 0 0' }}>{marker.popup}</p>}
                  </Popup>
                )}
              </Marker>
            </Fragment>
          );
        })}

        {cities.map((city) => {
          const position = [city.lat, city.lng];
          return (
            <Fragment key={city.nome}>
              {city.sede && (
                <CircleMarker
                  center={position}
                  radius={18}
                  pathOptions={{
                    color: '#ee7020',
                    weight: 1,
                    fillColor: '#ee7020',
                    fillOpacity: 0.15,
                  }}
                />
              )}
              <CircleMarker
                center={position}
                radius={city.sede ? 9 : 6}
                pathOptions={{
                  color: '#ffffff',
                  weight: 2,
                  fillColor: city.sede ? '#b94e12' : '#ee7020',
                  fillOpacity: 0.95,
                }}
              >
                <Tooltip direction="top" offset={[0, -4]} opacity={1} className="city-tooltip">
                  <strong>{city.nome}</strong>
                  {city.sede ? ' · Sede' : ''}
                </Tooltip>
              </CircleMarker>
            </Fragment>
          );
        })}
      </MapContainer>
    </div>
  );
}
