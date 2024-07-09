import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElavated]}>
        <Image
          source={{
            uri: 'https://cdn.britannica.com/24/153524-050-BA9D084B/Al-Dayr-Petra-Jordan.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Petra</Text>

          <Text style={styles.cardDescription}>
            This is Petra, a very popular tourist destination visited by
            millions accross the world.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  cardElavated: {},
  cardImage: {height: 300},
  cardBody: {},
  cardTitle: {},
  cardDescription: {},
  cardFooter: {},
});
