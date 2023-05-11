import axios from "axios";

export const getPhotonResults = async (addressArray) => {
    if(!addressArray) return;

    let params = {
        q: addressArray,
        osm_tag: [
            "highway:footway",
            "highway:cycleway",
            "place"
        ]
        // osm_tag: "highway:footway",
        // osm_tag: "highway:cycleway",
        // osm_tag: "place",
    };

    const queryString = Object.entries(params)
        .flatMap(([key, values]) => Array.isArray(values)
            ? values.map(val => `${key}=${val}`)
            : `${key}=${values}`)
        .join('&');

    console.log("queryString", queryString)

    const response = await axios.get(`https://photon.komoot.io/api/?${queryString}`);

    console.log("response", response);

    //   const trailsArray = response.data.features.map((_item) => _item?.properties?.name);

    const resultsArray = response.data.features

    return resultsArray;
};