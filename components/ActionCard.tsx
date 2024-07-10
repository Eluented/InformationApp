import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.headingText, styles.elavatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in Petra?</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/db/57/ed.jpg',
          }}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Camels, Tourists, Scammers, Donkeys, and Very Nice Views(Speaking
            from experience)
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://busygoingnowhere.com/2022/11/16/death-by-donkey-in-petra'
              )
            }>
            <Text>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  elavatedCard: {},
  headingContainer: {},
  headerText: {},
  bodyContainer: {},
  footerContainer: {},
  cardImage: {},
});
