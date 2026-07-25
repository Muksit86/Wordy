import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

const tabs = [
  { name: "Home", icon: "house" },
  { name: "Saved", icon: "bookmark" },
  { name: "Profile", icon: "user" },
];

export default function Navbar({
  currentTab,
  onHomePress,
  onSavedPress,
  onProfilePress,
}) {
  return (
    <View style={styles.bottomWrapper}>
      <View style={styles.bottomBar}>
        {tabs.map((tab) => {
          const isFocused = currentTab === tab.name;

          return (
            <TouchableOpacity
              key={tab.name}
              style={[styles.tabButton, isFocused && styles.activeTab]}
              onPress={() => {
                switch (tab.name) {
                  case "Home":
                    onHomePress?.();
                    break;

                  case "Saved":
                    onSavedPress?.();
                    break;

                  case "Profile":
                    onProfilePress?.();
                    break;
                }
              }}
            >
              <FontAwesome6
                name={tab.icon}
                size={20}
                color={isFocused ? "white" : "#111"}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomWrapper: {
    position: "absolute",
    bottom: 18,
    left: 0,
    right: 0,
    alignItems: "center",
  },

  bottomBar: {
    borderWidth: 3,
    borderColor: "black",
    width: "88%",
    backgroundColor: "white",
    borderRadius: 99,
    paddingHorizontal: 14,
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
