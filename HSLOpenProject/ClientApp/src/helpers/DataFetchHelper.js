const URLSearch = "https://api.digitransit.fi/geocoding/v1/autocomplete?text=";
const URLAddressSearch = "https://api.digitransit.fi/geocoding/v1/search?text="

const rect_min_lon = 22.66;
const rect_max_lon = 26.67;
const rect_min_lat = 59.62;
const rect_max_lat = 60.85;

const min_lon = "boundary.rect.min_lon";
const max_lon = "boundary.rect.max_lon";
const min_lat = "boundary.rect.min_lat";
const max_lat = "boundary.rect.max_lat";

export async function fetchData(searchTerm) {
    console.log(searchTerm);
    const res = await fetch(URLSearch + searchTerm +
        '&' + min_lon + '=' + rect_min_lon +
        '&' + max_lon + '=' + rect_max_lon +
        '&' + min_lat + '=' + rect_min_lat +
        '&' + max_lat + '=' + rect_max_lat);
    const json = await res.json();
    return json;
};