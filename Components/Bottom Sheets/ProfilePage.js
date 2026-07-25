import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import {
  DisplayText,
  SubHeaderText,
  BaseText,
  HeaderText,
} from "../Typography";

import { useNavigation } from "@react-navigation/native";
import Avatar from "../Avatar";

const selectedColor = "#8FB1F6";

export default function ProfileScreen({ onClose }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <FontAwesome6 name="xmark" size={34} color="#111" />
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome6 name="gear" size={34} color="#111" />
          </TouchableOpacity>
        </View>

        {/* Avatar */}
        <Avatar color={selectedColor} mood="angry" size={200} />

        {/* Name */}
        <DisplayText style={[styles.name]}>Abdul Muksit</DisplayText>
        <BaseText style={[styles.subtitle]}>Learning since July 2026</BaseText>

        {/* Stats */}
        <View style={styles.stats}>
          <Stat value="327" label="Words Learned" />
          <Stat value="12" label="Day streak" />
          <Stat value="96%" label="Accuracy" />
        </View>

        {/* Premium */}
        <View style={styles.category}>
          <BaseText>Premium</BaseText>

          <TouchableOpacity style={styles.premiumButton}>
            <SubHeaderText style={{ color: "white" }}>Go Premium</SubHeaderText>
            <FontAwesome6 name="arrow-right" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Overview */}
        <View style={styles.category}>
          <BaseText>Overview</BaseText>

          <View style={styles.overviewCards}>
            <SimpleCard title="Daily goal" value="5 words/day" />
            <SimpleCard title="Course level" value="Advance" />
          </View>
        </View>

        {/* Collection */}
        <View style={styles.category}>
          <BaseText>Your collection</BaseText>

          <View style={styles.savedRow}>
            <FontAwesome6 name="bookmark" size={30} color="#111" />

            <View style={{ flex: 1, marginLeft: 24 }}>
              <Text style={styles.savedTitle}>Saved words</Text>

              <Text style={styles.savedValue}>12 words</Text>
            </View>

            <FontAwesome6 name="angle-right" size={30} color="#111" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Stat = ({ value, label }) => (
  <View style={{ alignItems: "center", gap: 8 }}>
    <HeaderText>{value}</HeaderText>
    <BaseText>{label}</BaseText>
  </View>
);

const SimpleCard = ({ title, value }) => (
  <View>
    <View style={styles.CardStyle}>
      <BaseText style={styles.cardTitle}>{title}</BaseText>
      <SubHeaderText style={styles.cardValue}>{value}</SubHeaderText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE7B8",
    paddingBottom: 40,
  },

  content: {
    marginTop: 30,
    paddingHorizontal: 28,
    paddingTop: 25,
    gap: 32,
    paddingBottom: 150,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  avatar: {
    width: 260,
    height: 140,
    borderRadius: 24,
    backgroundColor: "#8FB1F6",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  eye: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  pupil: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#222",
  },

  name: {
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },

  shadowContainer: {
    position: "relative",
  },

  shadow: {
    position: "absolute",
    top: 8,
    left: 8,
    right: 0,
    bottom: 0,
    backgroundColor: "#000",
    borderRadius: 24,
  },

  card: {
    flex: 1,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: "#111",
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
  },

  CardStyle: {
    backgroundColor: "hsl(0, 0%, 100%)",
    height: 80,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 3,
    borderRadius: 12,
    justifyContent: "center",
    gap: 16,
  },

  category: {
    gap: 8,
  },

  premiumButton: {
    height: 60,
    backgroundColor: "#4C72B5",
    paddingHorizontal: 30,
    borderRadius: 12,
    borderWidth: 3,
    boxShadow: "4px 4px 0px black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
  },

  overviewCards: {
    gap: 16,
  },

  savedRow: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 3,
    borderRadius: 12,
    boxShadow: "4px 4px 0px black",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 28,
  },

  savedTitle: {
    fontSize: 16,
    color: "#222",
  },

  savedValue: {
    fontSize: 23,
    fontWeight: "700",
    marginTop: 8,
  },
});
