const sfLocation = () => ({
  center: { lat: 37.7749, lng: -122.4194 },
  zoom: 12,
});

const nyLocation = () => ({
  center: { lat: 40.784, lng: -73.968029 },
  zoom: 12,
});

const defaultOptions = () => ({
  center: { lat: 39.012435, lng: -101.434 },
  zoom: 3,
});

const getLocation = (query) => {
  switch (query.toLowerCase()) {
    case "san francisco":
      return sfLocation();
    case "new york":
      return nyLocation();
    default:
      return defaultOptions();
  }
};

export default getLocation;
