// "28.54° N 77.39° E"
export function formatCoordinates({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  const lat = `${Math.abs(latitude).toFixed(2)}° ${latitude < 0 ? 'S' : 'N'}`;
  const lon = `${Math.abs(longitude).toFixed(2)}° ${longitude < 0 ? 'W' : 'E'}`;
  return `${lat} ${lon}`;
}
