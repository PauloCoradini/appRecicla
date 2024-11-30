import axios from 'axios';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const SearchCollectionPointsScreen = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [collectionPoints, setCollectionPoints] = useState([]);

  const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permissão de localização não concedida!');
        return;
      }

      const userLocation = await Location.getCurrentPositionAsync({});
      setLocation(userLocation.coords);
    };

    getLocation();
  }, []);

  const searchCollectionPoints = async () => {
    if (!location) {return;}

    setLoading(true);

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=5000&type=point_of_interest&keyword=reciclagem&key=${googleMapsApiKey}`
      );
      setCollectionPoints(response.data.results);
    } catch (error) {
      console.error('Erro ao buscar pontos de coleta:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busca de Pontos de Coleta</Text>

      {loading && <ActivityIndicator size="large" color="#00ff00" />}

      <Button title="Buscar Pontos de Coleta" color="#2b4090" style={styles.buttonBusca} onPress={searchCollectionPoints} />

      {location && (
        <MapView
          style={styles.map}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {collectionPoints.map((point, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: point.geometry.location.lat,
                longitude: point.geometry.location.lng,
              }}
              title={point.name}
              description={point.vicinity}
            />
          ))}
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cce8a2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: '70%',
    marginTop: 16,
  },
  buttonBusca: {
    marginBottom: 16,
  },
});

export default SearchCollectionPointsScreen;
