import mapboxgl from 'mapbox-gl';
import { MAPBOX_ACCESS_TOKEN } from 'app/envs';

import { View, Modal, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { gpx as toGeoJSON } from '@tmcw/togeojson';
import { DOMParser } from 'xmldom';
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

const useGpxUpload = (setShape) => {
  const handleGpxUpload = async () => {
    console.log('clikedd');
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/gpx+xml',
      });
      console.log('result', result);
      if (result.type === 'success') {
        const base64Gpx = result.uri.split(',')[1];
        const gpxString = atob(base64Gpx);
        const parsedGpx = new DOMParser().parseFromString(gpxString);
        const geojson = toGeoJSON(parsedGpx);
        setShape(geojson);
      }
    } catch (err) {
      Alert.alert('An error occured');
    }
  };

  return handleGpxUpload;
};

export default useGpxUpload;
