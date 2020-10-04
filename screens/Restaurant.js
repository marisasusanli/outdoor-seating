import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Images from '../images/index';
import { addFavorite } from '../favoritesReducer';

export function SingleRestaurant({ route, navigation, addNewFavorite }, props) {
  const { location } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{`${location.name}`}</Text>
      <Text style={styles.baseText}>Address: {location.address} </Text>
      <Text style={styles.baseText}>Hours: {location.hours} </Text>

      <Text style={styles.baseText}>Great for: {location.description} </Text>
      <Image style={styles.image} source={Images[location.id]} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => addNewFavorite(location)}
      >
        <Text>Add to favorites</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#90A083',
  },
  headingText: {
    fontFamily: 'Cochin',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 5,
  },
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 15,
    margin: 5,
  },
  image: {
    width: 325,
    height: 325,
  },
  button: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#D3AF3F',
  },
});

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewFavorite: (location) => dispatch(addFavorite(location)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleRestaurant);
