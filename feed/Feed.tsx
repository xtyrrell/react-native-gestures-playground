import { View, StyleSheet } from "react-native";

import { Card } from "./Card";
import { useSharedValue } from "react-native-reanimated";

const cards = [
  {
    source: require("./assets/gfy.avif"),
  },
  {
    source: require("./assets/QmPKWoHCYB9dYyYTJMSpkWqyVne14hvaJuQBwP8Esk7AoF.avif"),
  },
  {
    source: require("./assets/color.gif"),
  },
  {
    source: require("./assets/QmcutuL6bSjiKUSW9niza656nz49EWzg1Mwkpug3c2VCML.avif"),
  },
  {
    source: require("./assets/QmWLmxg2YX46rk2TBWn1WeeMbEfNkKDtfFyFNsZ5hAboJp.avif"),
  },
  // {
  //   source: require("./assets/QmPKWoHCYB9dYyYTJMSpkWqyVne14hvaJuQBwP8Esk7AoF.avif"),
  // },
  // {
  //   source: require("./assets/QmPKWoHCYB9dYyYTJMSpkWqyVne14hvaJuQBwP8Esk7AoF.avif"),
  // },
  // {
  //   source: require("./assets/QmPKWoHCYB9dYyYTJMSpkWqyVne14hvaJuQBwP8Esk7AoF.avif"),
  // },
];

export const assets = cards.map((card) => card.source);

export const Feed = () => {
  const shuffleBack = useSharedValue(false);

  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <Card card={card} key={index} index={index} shuffleBack={shuffleBack} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
});
