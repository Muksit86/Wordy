import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import {
  DisplayText,
  SubHeaderText,
  BaseText,
  HeaderText,
} from "../Typography";
import Navbar from "../Navbar";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const words = Array(2).fill({
  word: "Meticulous",
  meaning: "the meaning of the word",
});

export default function ReviewScreen({ onClose }) {
  const route = useRoute();
  const navigation = useNavigation();
  const [currentTab, setCurrentTab] = useState("Saved");

  function openScreen(screenName) {
    if (screenName === "Home") {
      setCurrentTab("Home");
      return;
    }

    setCurrentTab(screenName);

    if (screenName === "Saved") {
      navigation.navigate("SavedPage");
      return;
    }

    navigation.navigate("ProfilePage");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Close */}
        <View style={styles.closeButtonWrap}>
          <Pressable onPress={() => navigation.goBack()}>
            <FontAwesome6 name="arrow-left" size={34} color="#111" />
          </Pressable>
        </View>

        {/* Title */}
        <HeaderText style={styles.title}>
          Here all of the word’s that{"\n"}
          you mistake
        </HeaderText>

        {/* Count */}
        <View style={styles.wordList}>
          <View style={styles.countRow}>
            <SubHeaderText>{words.length} word</SubHeaderText>
            <FontAwesome6 name="angle-right" size={34} color="#111" />
          </View>

          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.wordCards}>
              {words.map((item, index) => (
                <WordCard key={`${item.word}-${index}`} {...item} />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

function WordCard({ word, meaning }) {
  return (
    <Pressable>
      <View style={styles.card}>
        <View style={{ gap: 8 }}>
          <HeaderText style={styles.word}>{word}</HeaderText>
          <BaseText style={styles.meaning}>{meaning}</BaseText>
        </View>
        <FontAwesome6 name="angle-right" size={20} color="#111" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE7B7",
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 24,
    gap: 40,
  },

  closeButtonWrap: {
    justifyContent: "flex-start",
    marginTop: 40,
  },

  countRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  wordList: {
    flex: 1,
    gap: 24,
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 6, // room for the shadow
    paddingBottom: 100,
  },

  wordCards: {
    gap: 16,
  },

  card: {
    backgroundColor: "hsl(0, 0%, 100%)",
    borderWidth: 3,
    borderColor: "hsl(0, 0%, 5%)",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 15,
    boxShadow: '4px 4px 0px "hsl(0, 0%, 5%)',
    overflow: "visible",
  },
});
