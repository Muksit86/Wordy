import React, { useState } from "react";
import { ScrollView, StyleSheet, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../Context/AuthContext";
import { useRoute } from "@react-navigation/native";
import {
  DisplayText,
  SubHeaderText,
  BaseText,
  HeaderText,
} from "../../Components/Typography";
import PrimaryButton from "../../Constant/PrimaryButton";
import Navbar from "../../Components/Navbar";
import Card from "../../Components/Card";
import LessonModal from "../../Flows/Lesson/LessonModal";

export default function HomeScreen() {
  const { user } = useAuth();
  const route = useRoute();
  const navigation = useNavigation();
  const [currentTab, setCurrentTab] = useState("Home");
  const [lessonVisible, setLessonVisible] = useState(false);

  function openScreen(screenName) {
    setCurrentTab(screenName);

    switch (screenName) {
      case "Saved":
        navigation.navigate("SavedPage");
        break;

      case "Profile":
        navigation.navigate("ProfilePage");
        break;

      default:
        break;
    }
  }
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 130 }}>
        <View style={{ paddingHorizontal: 20, gap: 32 }}>
          <View style={styles.header}>
            <DisplayText style={styles.displayeText}>
              Welcome back {user?.displayName ?? "Learner"}
            </DisplayText>

            <Card style={styles.streak}>
              <BaseText>24</BaseText>
              <FontAwesome6 name="fire-flame-simple" size={20} color="black" />
            </Card>
          </View>

          <View style={styles.progress}>
            <View style={styles.progressHeader}>
              <BaseText>Your progress</BaseText>
            </View>

            <View style={styles.row}>
              <StatCard value="387" label="Words Learn" />
              <StatCard value="12" label="Day streak" />
            </View>
          </View>

          <Card style={styles.wordCard}>
            <BaseText>Word of the day</BaseText>

            <View style={styles.wordCardLable}>
              <HeaderText>Meticulous</HeaderText>
              <BaseText>Tap to learn the meaning</BaseText>
            </View>
          </Card>

          <Card
            style={[styles.wordCard, { backgroundColor: "hsl(221, 47%, 48%)" }]}
            onPress={() => setLessonVisible(true)}
          >
            <BaseText style={{ color: "white" }}>Today's lesson</BaseText>
            <View style={styles.lessonCheck}>
              <FontAwesome6 name="circle-check" size={34} color="#C7FF58" />
            </View>

            <View style={styles.wordCardLable}>
              <HeaderText style={{ color: "white" }}>
                Expressing Emotion
              </HeaderText>
              <BaseText style={{ color: "white" }}>5 words</BaseText>
            </View>
          </Card>

          <Card style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <View style={{ gap: 8 }}>
                <SubHeaderText>Continue Review</SubHeaderText>
                <BaseText>12 words waiting</BaseText>
              </View>

              <FontAwesome6 name="angle-right" size={30} color="#111" />
            </View>

            <PrimaryButton
              title="Complete the lesson"
              onPress={() => setLessonVisible(true)}
              backgroundColor="white"
              color="#111"
              style={styles.button}
            />
          </Card>
        </View>
      </ScrollView>

      <LessonModal
        visible={lessonVisible}
        onClose={() => setLessonVisible(false)}
      />
    </SafeAreaView>
  );
}

function StatCard({ value, label }) {
  return (
    <Card style={styles.statCard}>
      <View style={styles.statRow}>
        <FontAwesome6 name="book-open" size={20} color="black" />
        <SubHeaderText>{value}</SubHeaderText>
      </View>

      <BaseText>{label}</BaseText>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE7B7",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  displayeText: {
    flex: 1,
  },

  streak: {
    backgroundColor: "hsl(0, 0%, 100%)",
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "hsl(0, 0%, 5%)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  progress: {
    gap: 16,
  },

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },

  statCard: {
    flex: 1,
    backgroundColor: "hsl(211, 43%, 73%)",
    borderWidth: 3,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 16,
  },

  statRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  wordCard: {
    flex: 1,
    backgroundColor: "hsl(0, 0%, 100%)",
    padding: 20,
    borderWidth: 3,
    borderRadius: 12,
    boxShadow: "4px 4px 0px hsl(0, 0%, 5%)",
    gap: 16,
  },

  wordCardLable: {
    gap: 8,
  },

  lessonCheck: {
    position: "absolute",
    right: 20,
    top: 18,
  },

  reviewCard: {
    flex: 1,
    backgroundColor: "hsl(0, 0%, 100%)",
    padding: 20,
    borderWidth: 3,
    borderRadius: 12,
    boxShadow: "4px 4px 0px hsl(0, 0%, 5%)",
    gap: 16,
  },

  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    minHeight: 64,
    borderRadius: 12,
  },
});
