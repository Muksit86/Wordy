import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Pressable, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

import { COLORS } from "../../Constant/Colors";
import PrimaryButton from "../../Constant/PrimaryButton";
import { DisplayText, HeaderText } from "../../Components/Typography";

const LANGUAGES = ["English", "Spanish", "French", "German", "Bangla"];

export default function LanguageCard({ onNext }) {
  const [selected, setSelected] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <DisplayText>Choose a language</DisplayText>

        <View style={styles.list}>
          {LANGUAGES.map((item) => (
            <Pressable
              key={item}
              style={[styles.card, selected === item && styles.selectedCard]}
              onPress={() => setSelected(item)}
            >
              <HeaderText>{item}</HeaderText>

              {selected === item && (
                <FontAwesome6 name="check" size={22} color={COLORS.Triary} />
              )}
            </Pressable>
          ))}
        </View>

        <PrimaryButton
          title="Continue"
          disabled={!selected}
          onPress={() => onNext(selected)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Background,
  },

  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingVertical: 40,
    gap: 28,
  },

  list: {
    gap: 18,
    flex: 1,
  },

  card: {
    backgroundColor: COLORS.white,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: COLORS.black,
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  selectedCard: {
    borderColor: COLORS.Triary,
  },
});
