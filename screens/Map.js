import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as restoData from '../restos.json';
import { ScrollView } from 'react-native-gesture-handler';

export default class MainMap extends React.Component {
  componentDidMount() {
    // get map marker info from database?
  }
  render() {
    let dataToMap = restoData.locations;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          region={{
            latitude: 40.727763,
            longitude: -73.953656,
            latitudeDelta: 0.028,
            longitudeDelta: 0.025,
          }}
          showsUserLocation={true}
        >
          {dataToMap.map((marker) => (
            <Marker
              key={marker.properties.id}
              coordinate={marker.properties.coordinates}
              title={marker.properties.name}
              pinColor={
                marker.properties.type === 'restaurant' ? '#C70039' : 'purple'
              }
            >
              <Callout
                tooltip
                onPress={() =>
                  this.props.navigation.navigate('Restaurant', {
                    location: marker.properties,
                  })
                }
              >
                <View>
                  <View style={styles.calloutBox}>
                    <Text style={styles.calloutTitle}>
                      {marker.properties.name}
                    </Text>
                    <Text style={styles.calloutText}>
                      {marker.properties.address}
                    </Text>
                  </View>
                  <View style={styles.arrow} />
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
        <ScrollView></ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutBox: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 0.5,
    padding: 5,
    backgroundColor: '#D3AF3F',
    borderColor: '#ccc',
  },
  calloutTitle: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },
  calloutText: {
    fontFamily: 'Cochin',
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: 'transparent',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#D3AF3F',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  image: {
    width: 120,
    height: 80,
  },
});
