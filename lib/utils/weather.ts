// WMO weather interpretation codes, as Open-Meteo returns them, in a word
// or two.
export function describeWeather(code: number) {
  if (code === 0) return 'clear';
  if (code <= 2) return 'partly cloudy';
  if (code === 3) return 'overcast';
  if (code <= 48) return 'foggy';
  if (code <= 57) return 'drizzling';
  if (code <= 67) return 'raining';
  if (code <= 77) return 'snowing';
  if (code <= 82) return 'showers';
  return 'stormy';
}
