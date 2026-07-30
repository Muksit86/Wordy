import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  StyleSheet,
  Pressable,
  View,
  TextInput,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { HeaderText, BaseText } from "../../components/custom_typography";

const COLORS = {
  white: "hsl(0, 0%, 100%)",
  black: "hsl(0, 0%, 5%)",
  Accent: "hsl(211, 43%, 73%)",
  Secondary: "hsl(47, 88%, 73%)",
  Triary: "hsl(221, 47%, 48%)",
  Background: "hsl(30, 100%, 87%)",
};

const LANGUAGES = [
  {
    name: "English",
    code: "EN",
  },
  {
    name: "Chinese",
    code: "CN",
  },
  {
    name: "Hindi",
    code: "HN",
  },
  {
    name: "Bengali",
    code: "BN",
  },
  {
    name: "Spanish",
    code: "SP",
  },
  {
    name: "French",
    code: "FN",
  },
  {
    name: "Germany",
    code: "GN",
  },
];

export default function LanguageScreen() {
  const navigation = useNavigation();

  const [search, setSearch] = useState("");

  const filtered = LANGUAGES.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <FontAwesome6 name="angle-left" size={30} color={COLORS.black} />
          </Pressable>

          <HeaderText>Settings / Language</HeaderText>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <FontAwesome6 name="magnifying-glass" size={28} color="#808080" />

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="'Bengali'"
            placeholderTextColor="#808080"
            style={styles.input}
          />

          <Pressable>
            <FontAwesome6 name="eye" size={28} color={COLORS.black} />
          </Pressable>
        </View>

        {/* Languages */}
        <View style={styles.list}>
          {filtered.map((item) => (
            <Pressable
              key={item.code}
              style={styles.languageCard}
              activeOpacity={0.8}
            >
              <BaseText>{item.name}</BaseText>

              <HeaderText>{item.code}</HeaderText>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Background,
  },

  content: {
    paddingHorizontal: 28,
    paddingTop: 40,
    paddingBottom: 40,
    gap: 32,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  searchContainer: {
    height: 82,
    backgroundColor: COLORS.white,
    borderWidth: 3,
    borderColor: COLORS.black,
    borderRadius: 20,
    boxShadow: `4px 4px 0px ${COLORS.black}`,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },

  input: {
    flex: 1,
    fontSize: 18,
    color: COLORS.black,
  },

  list: {
    gap: 20,
  },

  languageCard: {
    height: 82,
    backgroundColor: COLORS.white,
    borderWidth: 3,
    borderColor: COLORS.black,
    borderRadius: 20,
    boxShadow: `4px 4px 0px ${COLORS.black}`,
    paddingHorizontal: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
