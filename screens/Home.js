import React from 'react';
import { StyleSheet, Text, Button, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <View>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/1528013/pexels-photo-1528013.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          }}
          style={{ width: 375, height: 630 }}
        />

        <StatusBar style='auto' />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.header}>North Brooklyn Outdoor Seating Guide</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90A083',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'Cochin',
    fontSize: 35,
    margin: 5,
    textAlign: 'center',
  },
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textContainer: {
    backgroundColor: 'rgba(248, 247, 216, 0.6)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
