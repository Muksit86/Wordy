import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

const icons = {
  HomeTab: "house",
  Saved: "bookmark",
  Profile: "user",
};

export default function Navbar({ state, navigation }) {
  return (
    <View style={styles.bottomWrapper}>
      <View style={styles.bottomBar}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={route.key}
              style={[styles.tabButton, isFocused && styles.activeTab]}
              onPress={onPress}
              accessibilityRole="button"
            >
              <FontAwesome6
                name={icons[route.name]}
                size={20}
                color={isFocused ? "white" : "#111"}
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 10,
  },

  bottomBar: {
    borderTopWidth: 3,
    borderColor: "black",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 0,
    paddingHorizontal: 0,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  tabButton: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },

  activeTab: {
    width: 110,
    height: 70,
    backgroundColor: "#000",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
});
