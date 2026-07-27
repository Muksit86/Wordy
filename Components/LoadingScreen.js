import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="hsl(221,47%,48%)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsl(30,100%,87%)",
    justifyContent: "center",
    alignItems: "center",
  },
});
