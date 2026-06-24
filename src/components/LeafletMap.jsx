import { Fragment } from 'react';
import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function LeafletMap({
  center,
  zoom = 13,
  markers = [],
  height = 420,
  className = '',
  scrollWheelZoom = false,
}) {
  const fallback = markers[0];
  const mapCenter = center || (fallback ? [fallback.lat, fallback.lng] : [-23.398, -51.905]);

  return (
    <div className={`overflow-hidden rounded-xl shadow-xl shadow-black/10 ${className}`} style={{ height }}>
      <MapContainer
        center={mapCenter}
        zoom={zoom}
        scrollWheelZoom={scrollWheelZoom}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
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
      </MapContainer>
    </div>
  );
}
