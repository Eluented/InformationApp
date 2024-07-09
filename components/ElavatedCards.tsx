import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElavatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElavatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElavated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElavated]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElavated]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElavated]}>
          <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElavated]}>
          <Text>😊</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {padding: 8},
  card: {
    width: 100,
    height: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    margin: 8,
    color: '#00000',
  },
  cardElavated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
