import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
} from 'react-native';
import { removeFavorite } from '../favoritesReducer';

export class List extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headText}>
          {this.props.favorites.length === 1
            ? 'You have 1 favorite'
            : `You have ${this.props.favorites.length} favorites`}
        </Text>
        <FlatList
          data={this.props.favorites}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() =>
                this.props.navigation.navigate('Restaurant', {
                  location: item,
                })
              }
            >
              <View style={styles.lineItem}>
                <Text style={styles.baseText}>{`${item.name}    `}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.removeFromFavorites(item)}
                >
                  <Text>X</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90A083',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headText: {
    fontFamily: 'Cochin',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
  },
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 20,
  },
  lineItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#D3AF3F',
  },
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#B88FA3',
  },
});

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromFavorites: (place) => {
      dispatch(removeFavorite(place));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
